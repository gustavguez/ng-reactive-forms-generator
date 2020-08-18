import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { GeneratorFormService } from './generator-form.service';
import { ArrayUtility } from 'src/app/shared/utilities/array.utility';
import { StringUtility } from 'src/app/shared/utilities/string.utility';
import { InputTypeEnum } from 'src/app/shared/models/input-type.enum';


@Component({
  selector: 'app-generator-form',
  templateUrl: './generator-form.component.html',
  styleUrls: ['./generator-form.component.scss'],
})
export class GeneratorFormComponent implements OnInit, OnDestroy {
  //Models
  inputsForms: FormArray;
  subscriptions: Subscription[];

  //Inject services
  constructor(
    private formBuilder: FormBuilder,
    private generatorFormService: GeneratorFormService
  ) { }

  //On component init
  ngOnInit(): void {
    //Create form
    this.inputsForms = this.formBuilder.array([]);

    //Subscribes
    this.subscriptions = [
      this.generatorFormService.onGenerateFormInputsRequested.subscribe((names: string[]) => {
        //Iterate names
        ArrayUtility.each(names, (name: string) => this.addInputForm(name));
      })
    ]
  }

  //On component destroy
  ngOnDestroy(): void {
    ArrayUtility.each(this.subscriptions, (subs: Subscription) => subs.unsubscribe());
  }

  //Custom events
  onGenerateClick(): void {
    this.startGenerate();
  }

  //Private methods
  private addInputForm(name: string): void {
    //Push form group
    this.inputsForms.push(
      this.formBuilder.group({
        id: this.formBuilder.control(StringUtility.randomString()),
        name: this.formBuilder.control(name, Validators.required),
        type: this.formBuilder.control(InputTypeEnum.TEXT, Validators.required),
      })
    );
  }

  private startGenerate(): void {
    let generatedHtmlString: string = '';
    let generatedTsString: string = `
        form: FormGroup;

        constructor(private formBuilder: FormBuilder) {}

        ngOnInit(): void {
          this.form = this.formBuilder.group({
    `;

    ArrayUtility.each(this.inputsForms.value, (inputGroup: any) => {
      generatedHtmlString += `
        <div class="form-group">
          <label for="${inputGroup.id}">${inputGroup.name}</label>
          <input
            id="${inputGroup.id}"
            formControlName="${inputGroup.name}"
            type="${inputGroup.type}"
            class="form-control"
            placeholder="Escriba el ${inputGroup.name} del input"
          />
        </div>
      `;

      generatedTsString += `       ${inputGroup.name}: this.formBuilder.control(''),
      `;
    });

    generatedTsString += `
        });
      }
    `;

    //Emit generte finished
    this.generatorFormService.emitGenerateFinished(generatedTsString, generatedHtmlString);
  }
}
