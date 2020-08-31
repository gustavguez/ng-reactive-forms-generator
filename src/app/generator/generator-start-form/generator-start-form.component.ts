import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { GeneratorFormInterface } from '../generator-form.interface';
import { StringUtility } from '../../shared/utilities/string.utility';
import { GeneratorFormTypesEnum } from '../generator-form-types.enum';
import { GeneratorFormValidationsEnum } from '../generator-form-validations.enum';

@Component({
  selector: 'app-generator-start-form',
  templateUrl: './generator-start-form.component.html',
  styleUrls: ['./generator-start-form.component.scss'],
})
export class GeneratorStartFormComponent implements OnInit {
  //Constants
  static NAMES_SPLITTER_CHAR: string = ',';
  static REQUIRED_FORM_CHAR: string = '*';

  //Outputs
  @Output() onAdd: EventEmitter<GeneratorFormInterface[]> = new EventEmitter();

  //Models
  form: FormGroup;

  //Inject services
  constructor(private formBuilder: FormBuilder) {}

  //On component init
  ngOnInit(): void {
    //Create forms groups
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
    });
  }

  //Custom events
  onSubmit(): void {
    //Check valid
    if (this.form.valid) {
      //Get names as array
      const value: string = this.form.value.name;
      const names: string[] = value
        .split(GeneratorStartFormComponent.NAMES_SPLITTER_CHAR)
        .map((name) => name.trim())
        .filter((name) => !!name);

      //Notify parent with output
      this.onAdd.emit(names.map(name => {
        const validations: GeneratorFormValidationsEnum[] = [];

        //Check required char
        if(name.indexOf(GeneratorStartFormComponent.REQUIRED_FORM_CHAR) > -1){
          name = name.replace(GeneratorStartFormComponent.REQUIRED_FORM_CHAR, '');
          validations.push(GeneratorFormValidationsEnum.REQUIRED);
        }

        return { 
          id: StringUtility.randomString(),
          name: StringUtility.replace(name, ' ', '_'),
          label: StringUtility.upperCaseFirstLetter(name),
          validations: validations,
          type: GeneratorFormTypesEnum.TEXT //By default text
        }
      }));

      //Clear form
      this.form.reset();
    }
  }
}
