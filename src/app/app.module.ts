import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';




import {provideCharts,withDefaultRegisterables} from 'ng2-charts';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    provideCharts(withDefaultRegisterables()),
    provideHttpClient(withFetch()) // Aquí habilitas fetch
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
