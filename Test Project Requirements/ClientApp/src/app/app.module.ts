import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SaleHighchartsComponent } from './Sales/sales.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { NgbdDropdown } from './DropBox/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighchartsChartComponent,
    SaleHighchartsComponent,
    NgbdDropdown
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: SaleHighchartsComponent, pathMatch: 'full' },
    ])
  ],
  exports: [
    NgbdDropdown
  ],
  providers: [],
  bootstrap: [AppComponent, NgbdDropdown]
})
export class AppModule { }
