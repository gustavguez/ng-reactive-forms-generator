import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { GeneratorService } from '../generator.service';
import { ArrayUtility } from 'src/app/shared/utilities/array.utility';
import { GeneratorFormInterface } from '../generator-form.interface';

@Component({
  selector: 'app-generator-core',
  templateUrl: './generator-core.component.html',
  styleUrls: ['./generator-core.component.scss'],
})
export class GeneratorCoreComponent implements OnInit, OnDestroy {
  //Inputs
  @Input() startForms: GeneratorFormInterface[];

  //Models
  forms: GeneratorFormInterface[];
  subscriptions: Subscription[];

  //Inject services
  constructor(
    private generatorService: GeneratorService
  ) { }

  //On component init
  ngOnInit(): void {
    
    //Create form
    this.forms = ArrayUtility.hasValue(this.startForms) ? this.startForms : [];

    //Subscribes
    this.subscriptions = [
      this.generatorService.onGenerateFormsRequested.subscribe((forms: GeneratorFormInterface[]) => {
        this.forms.push(...forms);
      })
    ]
  }

  //On component destroy
  ngOnDestroy(): void {
    ArrayUtility.each(this.subscriptions, (subs: Subscription) => subs.unsubscribe());
  }

  //Custom events
  onGenerateClick(): void {
    this.generatorService.emitGenerateRequested(this.forms);
  }

  onFormValueChange(newValue: { key: string, value: string }, index: number): void {
    //Check
    if(this.forms[index]){
      //Update value to model
      this.forms[index][newValue.key] = newValue.value;
    }
  }
}
