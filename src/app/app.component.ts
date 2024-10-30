import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
    SlicePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'ANGULAR APP';
  today = new Date();

  upperCase() {
    this.title = this.title.toUpperCase();
    // this is JavaScript way not angular way
  }

  user: any = {
    name: 'Umair Munir',
    age: 30,
    email: 'work@gmail.com'
  }

  convertJson() {
    this.user =  JSON.stringify(this.user);
  }
}
