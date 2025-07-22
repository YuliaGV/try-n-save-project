import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ExpensesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ExpensesRoutingModule
  ]
})


export class ExpensesModule {
}
