import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

import { GeneratorComponent } from './generator.component';
import { GeneratorStartFormComponent } from './generator-start-form/generator-start-form.component';
import { GeneratorWelcomeComponent } from './generator-welcome/generator-welcome.component';
import { GeneratorFormComponent } from './generator-form/generator-form.component';
import { GeneratorFormInputComponent } from './generator-form/generator-form-input/generator-form-input.component';

@NgModule({
  declarations: [
    GeneratorComponent,
    GeneratorStartFormComponent,
    GeneratorWelcomeComponent,
    GeneratorFormComponent,
    GeneratorFormInputComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HighlightModule],
  exports: [GeneratorComponent],
})
export class GeneratorModule {}
