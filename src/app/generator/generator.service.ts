import { Injectable, EventEmitter } from '@angular/core';

import { GeneratorResultInterface } from './generator-result.interface';
import { GeneratorFormInterface } from './generator-form.interface';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  //Event emiters
  public onStartAgain: EventEmitter<void> = new EventEmitter();
  public onEditGenerated: EventEmitter<void> = new EventEmitter();
  public onGenerateRequested: EventEmitter<GeneratorFormInterface[]> = new EventEmitter();
  public onGenerateFormsRequested: EventEmitter<GeneratorFormInterface[]> = new EventEmitter();

  //Triggers
  public emitGenerateRequested(generators: GeneratorFormInterface[]): void {
    this.onGenerateRequested.emit(generators);
  }
  public emitGenerateForms(generators: GeneratorFormInterface[]): void {
    this.onGenerateFormsRequested.emit(generators);
  }
  public emitStartAgain(): void {
    this.onStartAgain.emit();
  }
  public emitEditGenerated(): void {
    this.onEditGenerated.emit();
  }

  //Methods
  public generate(forms: GeneratorFormInterface[]): GeneratorResultInterface {
    const result: GeneratorResultInterface = {};

    return result;
  }

  // let generatedHtmlString: string = '';
  //   let generatedTsString: string = `
  //       form: FormGroup;

  //       constructor(private formBuilder: FormBuilder) {}

  //       ngOnInit(): void {
  //         this.form = this.formBuilder.group({
  //   `;

  //   ArrayUtility.each(this.inputsForms.value, (inputGroup: any) => {
  //     generatedHtmlString += `
  //       <div class="form-group">
  //         <label for="${inputGroup.id}">${inputGroup.name}</label>
  //         <input
  //           id="${inputGroup.id}"
  //           formControlName="${inputGroup.name}"
  //           type="${inputGroup.type}"
  //           class="form-control"
  //           placeholder="Escriba el ${inputGroup.name} del input"
  //         />
  //       </div>
  //     `;

  //     generatedTsString += `       ${inputGroup.name}: this.formBuilder.control(''),
  //     `;
  //   });

  //   generatedTsString += `
  //       });
  //     }
  //   `;
}
