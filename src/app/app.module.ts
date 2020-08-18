import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { GeneratorModule } from './generator/generator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    CoreModule,
    SharedModule,
    GeneratorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
