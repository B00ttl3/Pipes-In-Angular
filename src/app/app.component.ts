import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UpperCasePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'angular app';

  upperCase() {
    this.title = this.title.toUpperCase();
    // this is JavaScript way not angular way
  }
}
