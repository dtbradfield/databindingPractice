import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding-assignment';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalStarted(startNumber: number) {
    if (startNumber % 2 == 0) {
      this.evenNumbers.push(startNumber);
    } else {
      this.oddNumbers.push(startNumber);
    }
  }
}
