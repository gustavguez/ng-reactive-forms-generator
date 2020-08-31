import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { GeneratorService } from '../generator.service';
import { ArrayUtility } from 'src/app/shared/utilities/array.utility';
import { GeneratorFormInterface } from '../generator-form.interface';
import { GeneratorInterface } from '../generator.interface';

@Component({
  selector: 'app-generator-core',
  templateUrl: './generator-core.component.html',
  styleUrls: ['./generator-core.component.scss'],
})
export class GeneratorCoreComponent implements OnInit, OnDestroy {
  //Inputs
  @Input() startForms: GeneratorFormInterface[];

  //Models
  generatorData: GeneratorInterface;
  subscriptions: Subscription[];

  //Inject services
  constructor(
    private generatorService: GeneratorService
  ) { }

  //On component init
  ngOnInit(): void {
    this.generatorData = {
      forms: ArrayUtility.hasValue(this.startForms) ? this.startForms : [],
      templates: this.generatorService.getStartingTemplates()
    };

    //Subscribes
    this.subscriptions = [
      this.generatorService.onGenerateFormsRequested.subscribe((forms: GeneratorFormInterface[]) => {
        this.generatorData.forms.push(...forms);
      })
    ]
  }

  //On component destroy
  ngOnDestroy(): void {
    ArrayUtility.each(this.subscriptions, (subs: Subscription) => subs.unsubscribe());
  }

  //Custom events
  onGenerateClick(): void {
    this.generatorService.emitGenerateRequested(this.generatorData);
  }

  onFormValueChange(newValue: { key: string, value: string }, index: number): void {
    //Check
    if(this.generatorData.forms[index]){
      //Update value to model
      this.generatorData.forms[index][newValue.key] = newValue.value;
    }
  }
}
