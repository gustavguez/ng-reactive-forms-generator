import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

import { SharedModule } from '../shared/shared.module';

import { GeneratorComponent } from './generator.component';
import { GeneratorStartFormComponent } from './generator-start-form/generator-start-form.component';
import { GeneratorWelcomeComponent } from './generator-welcome/generator-welcome.component';
import { GeneratorCoreComponent } from './generator-core/generator-core.component';
import { GeneratorResultComponent } from './generator-result/generator-result.component';
import { GeneratorCoreFooterComponent } from './generator-core/generator-core-footer/generator-core-footer.component';
import { GeneratorCoreFormComponent } from './generator-core/generator-core-form/generator-core-form.component';
import { GeneratorResultFooterComponent } from './generator-result/generator-result-footer/generator-result-footer.component';
import { GeneratorCoreTemplateComponent } from './generator-core/generator-core-template/generator-core-template.component';

@NgModule({
  declarations: [
    GeneratorComponent,
    GeneratorStartFormComponent,
    GeneratorWelcomeComponent,
    GeneratorCoreComponent,
    GeneratorResultComponent,
    GeneratorCoreFooterComponent,
    GeneratorCoreFormComponent,
    GeneratorResultFooterComponent,
    GeneratorCoreTemplateComponent,
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    HighlightModule, 
    SharedModule
  ],
  exports: [GeneratorComponent],
})
export class GeneratorModule {}
