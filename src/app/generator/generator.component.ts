import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ArrayUtility } from 'src/app/shared/utilities/array.utility';
import { GeneratorFormService } from './generator-form/generator-form.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent implements OnInit, OnDestroy {
  //Models
  startEditing: boolean;
  displayGenerated: boolean;
  generatedTsString: string;
  generatedHtmlString: string;
  subscriptions: Subscription[];

  //Inject services
  constructor(
    private generatorFormService: GeneratorFormService
  ) { }

  //On component init
  ngOnInit(): void {
    //Subscribes
    this.subscriptions = [
      this.generatorFormService.onGenerateFinished.subscribe((args: { ts: string, html: string }) => {
        //Load generated values
        this.generatedTsString = args.ts;
        this.generatedHtmlString = args.html;
        this.displayGenerated = true;
      })
    ]
  }

  //On component destroy
  ngOnDestroy(): void {
    ArrayUtility.each(this.subscriptions, (subs: Subscription) => subs.unsubscribe());
  }

  //Custom events
  onStart(names: string[]): void {
    if (ArrayUtility.hasValue(names)) {
      //Set flag to hide welcome box
      this.startEditing = true;

      //Generate forms
      this.generatorFormService.emitGenerateFormInputs(names);
    }
  }
}
