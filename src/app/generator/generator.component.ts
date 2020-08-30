import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ArrayUtility } from 'src/app/shared/utilities/array.utility';
import { GeneratorResultInterface } from './generator-result.interface';
import { GeneratorService } from './generator.service';
import { GeneratorFormInterface } from './generator-form.interface';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent implements OnInit, OnDestroy {
  //Models
  displayWelcome: boolean;
  displayGenerated: boolean;
  generatorResult: GeneratorResultInterface;
  generatedHtmlString: string;
  startForms: GeneratorFormInterface[];
  subscriptions: Subscription[];

  //Inject services
  constructor(
    private generatorService: GeneratorService
  ) { }

  //On component init
  ngOnInit(): void {
    this.startForms = [];
    this.displayWelcome = true;

    //Subscribes
    this.subscriptions = [
      this.generatorService.onGenerateRequested.subscribe((generators: GeneratorFormInterface[]) => {
        this.startGenerating(generators);
      }),
      this.generatorService.onStartAgain.subscribe(() => {
        this.startAgain();
      }),
      this.generatorService.onEditGenerated.subscribe(() => {
        this.editGenerated();
      })
    ]
  }

  //On component destroy
  ngOnDestroy(): void {
    ArrayUtility.each(this.subscriptions, (subs: Subscription) => subs.unsubscribe());
  }

  //Custom events
  onStart(generators: GeneratorFormInterface[]): void {
    if (ArrayUtility.hasValue(generators)) {
      
      //If the start generate it send inputs names by inputs
      if(this.displayWelcome || this.displayGenerated){
        this.startForms.push(...generators);

        //Set flag to hide welcome box
        this.displayWelcome = false;

        //Hide result
        this.displayGenerated = false;
      } else {
        //Generate forms by event emitter
        this.generatorService.emitGenerateForms(generators);
      }
    }
  }

  //Private methods
  private startGenerating(generators: GeneratorFormInterface[]): void {
    //Generate and load it to results
    this.generatorResult = this.generatorService.generate(generators);

    //Display
    this.displayGenerated = true;
  }

  private startAgain(): void {
    this.startForms = [];

    //Set flag to show welcome box
    this.displayWelcome = true;

    //Hide result
    this.displayGenerated = false;
  }

  private editGenerated(): void {
    //Hide result
    this.displayGenerated = false;
  }
}
