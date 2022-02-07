import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormsRoutingModule } from './template-forms-routing.module';
import { BasicosComponent } from './components/basicos/basicos.component';
import { DinamicosComponent } from './components/dinamicos/dinamicos.component';
import { SwitchesComponent } from './components/switches/switches.component';

import { CustomMinDirective } from './directives/custom-min.directive';

@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,

    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateFormsRoutingModule
  ]
})
export class TemplateFormsModule { }
