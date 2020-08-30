import { Component, Input } from '@angular/core';
import { GeneratorResultInterface } from '../generator-result.interface';

@Component({
  selector: 'app-generator-result',
  templateUrl: './generator-result.component.html',
  styleUrls: ['./generator-result.component.scss'],
})
export class GeneratorResultComponent {
  @Input() result: GeneratorResultInterface;
}
