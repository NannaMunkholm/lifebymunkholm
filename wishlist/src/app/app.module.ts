import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ToolsComponent } from './tools/tools.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { CSSComponent } from './guidelines/css/css.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ToolsComponent,
    GuidelinesComponent,
    DictionaryComponent,
    CSSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
