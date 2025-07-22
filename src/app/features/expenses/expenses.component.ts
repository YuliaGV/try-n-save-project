import { Component } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
  demoExpenses = [
    { description: 'Supermercado', amount: 50000, category: 'comida', date: new Date('2023-10-01') },
    { description: 'Taxi', amount: 12000, category: 'transporte', date: new Date('2023-10-02') },
    { description: 'Internet', amount: 90000, category: 'hogar', date: new Date('2023-10-03') }
  ];
 
}
