import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Expense Tracker App'; 
  isHandset: boolean = false; 
  private handsetSubscription: Subscription = new Subscription(); 

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  
    this.handsetSubscription = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches), 
        shareReplay() 
      )
      .subscribe(matches => {
        this.isHandset = matches; 
      });
  }

  ngOnDestroy(): void {
    this.handsetSubscription.unsubscribe();
  }
}
