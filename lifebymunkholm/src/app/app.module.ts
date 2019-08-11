import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { CssComponent } from './guidelines/css/css.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { ToolsComponent } from './tools/tools.component';
import { HostingComponent } from './guidelines/hosting/hosting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    GuidelinesComponent,
    CssComponent,
    DictionaryComponent,
    ToolsComponent,
    HostingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
