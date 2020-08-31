import { Injectable, EventEmitter } from '@angular/core';

import { GeneratorResultInterface } from './generator-result.interface';
import { GeneratorFormInterface } from './generator-form.interface';
import { GeneratorTemplatesInterface } from './generator-templates.interface';
import { GeneratorInterface } from './generator.interface';

import { GeneratorTemplates } from './generator-templates';
import { ArrayUtility } from '../shared/utilities/array.utility';
import { GeneratorFormTypesEnum } from './generator-form-types.enum';
import { StringUtility } from '../shared/utilities/string.utility';
import { GeneratorFormValidationsEnum } from './generator-form-validations.enum';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  //Event emiters
  public onStartAgain: EventEmitter<void> = new EventEmitter();
  public onEditGenerated: EventEmitter<void> = new EventEmitter();
  public onGenerateRequested: EventEmitter<GeneratorInterface> = new EventEmitter();
  public onGenerateFormsRequested: EventEmitter<GeneratorFormInterface[]> = new EventEmitter();

  //Triggers
  public emitGenerateRequested(generator: GeneratorInterface): void {
    this.onGenerateRequested.emit(generator);
  }
  public emitGenerateForms(generators: GeneratorFormInterface[]): void {
    this.onGenerateFormsRequested.emit(generators);
  }
  public emitStartAgain(): void {
    this.onStartAgain.emit();
  }
  public emitEditGenerated(): void {
    this.onEditGenerated.emit();
  }

  //Methods
  public generate(generator: GeneratorInterface): GeneratorResultInterface {
    const result: GeneratorResultInterface = {};

    //Helper vars
    let componentsHtml = '';
    let componentsTs = '';
    let formHtml = generator.templates.formHtml;
    let componentTs = generator.templates.componentTs;

    //Generate components
    ArrayUtility.each(generator.forms, (form: GeneratorFormInterface) => {
      let inputTemplate: string = this.getTemplateByFormType(form.type, generator.templates);
      let formGroupTemplate: string = generator.templates.formGroupHtml;
      let formBuilderTemplate: string = generator.templates.formBuilderTs;
      let formValidationsTemplate: string[] = [];

      //Render vars to input
      inputTemplate = this.renderTemplateVar(inputTemplate, 'id', form.id);
      inputTemplate = this.renderTemplateVar(inputTemplate, 'name', form.name);
      inputTemplate = this.renderTemplateVar(inputTemplate, 'label', form.label.toLocaleLowerCase());

      //Render form group vars
      formGroupTemplate = this.renderTemplateVar(formGroupTemplate, 'id', form.id);
      formGroupTemplate = this.renderTemplateVar(formGroupTemplate, 'label', form.label);

      //Render form builder vars
      formBuilderTemplate = this.renderTemplateVar(formBuilderTemplate, 'name', form.name);

      //Render validations
      ArrayUtility.each(form.validations, (validation: GeneratorFormValidationsEnum) => {
        formValidationsTemplate.push(
          this.getTemplateByFormValidation(validation, generator.templates)
        );
      });

      //Render validations to formBuilder
      formBuilderTemplate = this.renderTemplateVar(
          formBuilderTemplate, 
          'children', 
          formValidationsTemplate.filter(validation => !!validation).join(', ')
      );

      //Append to global vars
      componentsHtml += this.renderTemplateVar(formGroupTemplate, 'children', inputTemplate);
      componentsTs += formBuilderTemplate;
    });

    //Load html and ts
    result.html = this.renderTemplateVar(formHtml, 'children', componentsHtml);
    result.ts = this.renderTemplateVar(componentTs, 'children', componentsTs);

    return result;
  }

  public getStartingTemplates(): GeneratorTemplatesInterface {
    return GeneratorTemplates;
  }

  public getTemplateByFormType(type: GeneratorFormTypesEnum, templates: GeneratorTemplatesInterface): string {
    let template: string = '';

    switch (type) {
      case GeneratorFormTypesEnum.TEXT:
        template = templates.inputTextHtml;
        break;

      case GeneratorFormTypesEnum.NUMBER:
        template = templates.inputNumberHtml;
        break;

      default:
        break;
    }
    return template;
  }

  public getTemplateByFormValidation(validation: GeneratorFormValidationsEnum, templates: GeneratorTemplatesInterface): string {
    let template: string = '';

    switch (validation) {
      case GeneratorFormValidationsEnum.REQUIRED:
        template = templates.requiredFormTs;
        break;

      default:
        break;
    }
    return template;
  }

  public renderTemplateVar(template: string, name: string, value: string): string  {
    return StringUtility.replace(template, `@${name}`, value ? value : '');
  }

}
