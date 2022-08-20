import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { InputComponent } from './reactive-form/rective-form-reusable-components/input/input.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CreditCardPipe } from './reactive-form/credit-card.pipe';
import { HighlightDirective } from './custom-directives/highlight.directive';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};  // for input masking

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    InputComponent,
    CreditCardPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
