import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search.component';

const searchRouter: Routes = [
  {path: '', component: SearchComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(searchRouter)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule { }
