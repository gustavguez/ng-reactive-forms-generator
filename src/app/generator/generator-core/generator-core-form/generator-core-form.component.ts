import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StringUtility } from 'src/app/shared/utilities/string.utility';
import { GeneratorFormInterface } from '../../generator-form.interface';
import { GeneratorFormTypesEnum } from '../../generator-form-types.enum';
import { GeneratorFormValidationsEnum } from '../../generator-form-validations.enum';
import { ArrayUtility } from 'src/app/shared/utilities/array.utility';

@Component({
  selector: 'app-generator-core-form',
  templateUrl: './generator-core-form.component.html',
  styleUrls: ['./generator-core-form.component.scss']
})
export class GeneratorCoreFormComponent implements OnInit {
  //Outputs & Inputs
  @Input() form: GeneratorFormInterface;
  @Output() onFormValueChange: EventEmitter<{ key: string, value: any }> = new EventEmitter();

  //Models
  formGroup: FormGroup;
  types: any[];
  validations: any[];

  //Injecte services
  constructor(
    private formBuilder: FormBuilder
  ) { }

  //On component init
  ngOnInit(): void {
    this.types = [
      { value: GeneratorFormTypesEnum.TEXT, label: "Text" },
      { value: GeneratorFormTypesEnum.NUMBER, label: "Number" }
    ];

    this.validations = [
      { value: GeneratorFormValidationsEnum.REQUIRED, label: "Required" }
    ];
    
    this.formGroup = this.formBuilder.group({
      id: this.formBuilder.control(StringUtility.randomString()),
      name: this.formBuilder.control(this.form.name, Validators.required),
      label: this.formBuilder.control(this.form.label, Validators.required),
      type: this.formBuilder.control('text', Validators.required),

      //TODO: Find a better way of doing this
      validations: this.formBuilder.group({
        [GeneratorFormValidationsEnum.REQUIRED]: this.formBuilder.control(
          this.form.validations.indexOf(GeneratorFormValidationsEnum.REQUIRED) > -1
        )
      }) 
    });

  }

  //Custom events
  onValueChanged(key: string, value: string): void {
    this.onFormValueChange.emit({
      key, value
    });
  }

  onValidationsChanged(): void {
    const validations: GeneratorFormValidationsEnum[] = [];

    //Find true values
    ArrayUtility.each(this.formGroup.value.validations, (value: boolean, validation: GeneratorFormValidationsEnum) => {
      if(value) {
        validations.push(validation);
      }
    })

    this.onFormValueChange.emit({
      key: 'validations',
      value: validations
    })
  }

}
