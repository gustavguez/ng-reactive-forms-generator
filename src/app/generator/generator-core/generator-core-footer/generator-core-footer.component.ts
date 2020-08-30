import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generator-core-footer',
  templateUrl: './generator-core-footer.component.html',
  styleUrls: ['./generator-core-footer.component.scss'],
})
export class GeneratorCoreFooterComponent {
  @Output() onGenerate: EventEmitter<void> = new EventEmitter();

  //Custom events
  onGenerateClick(): void {
    this.onGenerate.emit();
  }
}
