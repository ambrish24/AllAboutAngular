import { Component } from '@angular/core';

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}

@Component({
  selector: 'app-ngclass-ngstyle',
  styleUrls: ['app-ngclass-ngstyle.component.scss'],
  template: `
    <div class="app">
      <input
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)">

      <ng-template [ngIf]="name.length > 2">
        <div>
          Searching for... {{ name }}
        </div>
      </ng-template>

      <div *ngIf="name.length > 2">
        Searching for... {{ name }}
      </div>

      <h3>Airline Passengers  using ng-template & [class] property</h3>
      <ul>
        <ng-template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li>
            <span
              class="status"
              [class.checked-in]="passenger.checkedIn"></span>
            {{ i }}: {{ passenger.fullname }}
          </li>
        </ng-template>
      </ul>
      <h3>Airline Passengers using *ngFor & [ngClass]</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span
            class="status"
            [ngClass]="{
              'checked-in': passenger.checkedIn,
              'checked-out': !passenger.checkedIn
            }"></span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
      <h3>Airline Passengers using [style]</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span
            class="status"
            [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')"></span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
      <h3>Airline Passengers using [ngStyle]</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span
            class="status"
            [ngStyle]="{
              backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
            }"></span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>

    </div>
  `
})
export class NgClassNgStyleComponent {
  name = '';

  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false
  }];

  handleChange(value: string) {
    this.name = value;
  }
}
