import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-generator-core-template',
  templateUrl: './generator-core-template.component.html',
  styleUrls: ['./generator-core-template.component.scss']
})
export class GeneratorCoreTemplateComponent implements OnInit {
  //Outputs & Inputs
  @Input() template: string;
  @Output() onTemplateValueChange: EventEmitter<string> = new EventEmitter();

  //Models
  formGroup: FormGroup;

  //Injecte services
  constructor(
    private formBuilder: FormBuilder
  ) { }

  //On component init
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      template: this.formBuilder.control(this.template)
    })
  }

  //Custom events
  onValueChanged(): void {
    this.onTemplateValueChange.emit(this.formGroup.value.template);
  }

}
