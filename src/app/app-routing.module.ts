import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "template",
    loadChildren: () => import('./template-forms/template-forms.module').then( (m) => m.TemplateFormsModule )
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive-forms/reactive-forms.module').then( (m) => m.ReactiveFormsModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
