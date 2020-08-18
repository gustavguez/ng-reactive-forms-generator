import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-generator-start-form',
  templateUrl: './generator-start-form.component.html',
  styleUrls: ['./generator-start-form.component.scss'],
})
export class GeneratorStartFormComponent implements OnInit {
  //Constants
  static NAMES_SPLITTER_CHAR: string = ',';

  //Outputs
  @Output() onAdd: EventEmitter<string[]> = new EventEmitter();

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
      this.onAdd.emit(names);

      //Clear form
      this.form.reset();
    }
  }
}
