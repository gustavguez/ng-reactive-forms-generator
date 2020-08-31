import { Component } from '@angular/core';

import { GeneratorService } from '../../generator.service';

@Component({
  selector: 'app-generator-result-footer',
  templateUrl: './generator-result-footer.component.html',
  styleUrls: ['./generator-result-footer.component.scss']
})
export class GeneratorResultFooterComponent {
  //Inject services
  constructor(
    private generatorService: GeneratorService
  ){}

  //Custom events
  onStartAgainClick(): void {
    this.generatorService.emitStartAgain();
  }

  onEditGeneratedClick(): void {
    this.generatorService.emitEditGenerated();
  }
}
