import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-generator-form-input',
  templateUrl: './generator-form-input.component.html',
  styleUrls: ['./generator-form-input.component.scss'],
})
export class GeneratorFormInputComponent implements OnInit {
  //Inputs
  @Input() form: FormGroup;

  //Inject services
  constructor() { }

  //On component init
  ngOnInit(): void { }
}
