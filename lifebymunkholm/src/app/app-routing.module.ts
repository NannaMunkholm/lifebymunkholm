import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { CssComponent } from './guidelines/css/css.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'guidelines', component: GuidelinesComponent},
  { path: 'dictionary', component: DictionaryComponent},
  { path: 'guidelines/css', component: CssComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }