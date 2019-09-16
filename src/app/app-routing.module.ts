import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path: 'rxjs',
    component: RxjsComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
