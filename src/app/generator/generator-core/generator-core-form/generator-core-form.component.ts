import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StringUtility } from 'src/app/shared/utilities/string.utility';
import { GeneratorFormInterface } from '../../generator-form.interface';
import { GeneratorFormTypesEnum } from '../../generator-form-types.enum';

@Component({
  selector: 'app-generator-core-form',
  templateUrl: './generator-core-form.component.html',
  styleUrls: ['./generator-core-form.component.scss']
})
export class GeneratorCoreFormComponent implements OnInit {
  //Outputs & Inputs
  @Input() form: GeneratorFormInterface;
  @Output() onFormValueChange: EventEmitter<{ key: string, value: string }> = new EventEmitter();

  //Models
  formGroup: FormGroup;
  types: any[];

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
    
    this.formGroup = this.formBuilder.group({
      id: this.formBuilder.control(StringUtility.randomString()),
      name: this.formBuilder.control(this.form.name, Validators.required),
      label: this.formBuilder.control(this.form.label, Validators.required),
      type: this.formBuilder.control('text', Validators.required),
    })
  }

  //Custom events
  onValueChanged(key: string, value: string): void {
    this.onFormValueChange.emit({
      key, value
    });
  }

}
