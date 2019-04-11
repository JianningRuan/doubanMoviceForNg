import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyComponent} from './my.component';

const myRouter: Routes = [
  {path: '', component: MyComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(myRouter)
  ],
  exports: [
    RouterModule
  ]
})
export class MyRoutingModule { }
