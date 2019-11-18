import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardChartsModule } from './dashboard-charts/dashboard-charts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
