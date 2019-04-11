import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './view/home/home.component';
import {HotComponent} from './view/hot/hot.component';
import {Error404Component} from './view/error404/error404.component';
import {SelectivePreloadingStrategyService} from './unit/preload/selective-preloading-strategy.service';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
      {path: '', component: HotComponent},
      {path: 'search', loadChildren: './view/search/search.module#SearchModule', data: {preload: true}},
      {path: 'my', loadChildren: './view/my/my.module#MyModule', data: {preload: true}},
    ]},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: SelectivePreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
