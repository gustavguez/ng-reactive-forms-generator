import { Injectable, EventEmitter } from '@angular/core';

import { GeneratorResultInterface } from './generator-result.interface';
import { GeneratorFormInterface } from './generator-form.interface';
import { GeneratorTemplatesInterface } from './generator-templates.interface';
import { GeneratorInterface } from './generator.interface';

import { GeneratorTemplates } from './generator-templates';
import { ArrayUtility } from '../shared/utilities/array.utility';
import { GeneratorFormTypesEnum } from './generator-form-types.enum';
import { StringUtility } from '../shared/utilities/string.utility';

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
    let componentsTs = generator.templates.componentTs;
    let formHtml = generator.templates.formHtml;

    //Generate components
    ArrayUtility.each(generator.forms, (form: GeneratorFormInterface) => {
      let inputTemplate: string = this.getTemplateByFormType(form.type, generator.templates);
      let formGroupTemplate: string = generator.templates.formGroupHtml;

      //Render vars to input
      inputTemplate = this.renderTemplateVar(inputTemplate, 'id', form.id);
      inputTemplate = this.renderTemplateVar(inputTemplate, 'name', form.name);
      inputTemplate = this.renderTemplateVar(inputTemplate, 'label', form.label.toLocaleLowerCase());

      //Render form group vars
      formGroupTemplate = this.renderTemplateVar(formGroupTemplate, 'id', form.id);
      formGroupTemplate = this.renderTemplateVar(formGroupTemplate, 'label', form.label);

      //Append to html
      componentsHtml += this.renderTemplateVar(formGroupTemplate, 'children', inputTemplate);
    });

    //Load html
    result.html = this.renderTemplateVar(formHtml, 'children', componentsHtml);

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

      default:
        break;
    }
    return template;
  }

  public renderTemplateVar(template: string, name: string, value: string): string  {
    return StringUtility.replace(template, `@${name}`, value);
  }

  // let generatedHtmlString: string = '';
  //   let generatedTsString: string = `
  //       form: FormGroup;

  //       constructor(private formBuilder: FormBuilder) {}

  //       ngOnInit(): void {
  //         this.form = this.formBuilder.group({
  //   `;

  //   ArrayUtility.each(this.inputsForms.value, (inputGroup: any) => {
  //     generatedHtmlString += `
  //       <div class="form-group">
  //         <label for="${inputGroup.id}">${inputGroup.name}</label>
          // <input
          //   id="${inputGroup.id}"
          //   formControlName="${inputGroup.name}"
          //   type="${inputGroup.type}"
          //   class="form-control"
          //   placeholder="Escriba el ${inputGroup.name} del input"
          // />
  //       </div>
  //     `;

  //     generatedTsString += `       ${inputGroup.name}: this.formBuilder.control(''),
  //     `;
  //   });

  //   generatedTsString += `
  //       });
  //     }
  //   `;
}
