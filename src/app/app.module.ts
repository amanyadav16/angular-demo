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
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChartJSComponent } from './charts/chartJS/chartJS.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxChartComponent } from './charts/chartJS/ngx-chart/ngx-chart.component';
import { MapDemoComponent } from './map/map-demo/map-demo.component';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};  // for input masking

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    InputComponent,
    CreditCardPipe,
    HighlightDirective,
    HomeComponent,
    NotFoundComponent,
    ChartJSComponent,
    NgxChartComponent,
    MapDemoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    NgxMaskModule.forRoot(options),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
