import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'expenses', loadChildren: () => import('./features/expenses/expenses.module').then(m => m.ExpensesModule) }, { path: 'expenses', loadChildren: () => import('./features/expenses/expenses.module').then(m => m.ExpensesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
