import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dTheme = true;

  constructor() { }


  onThemeChange()
  {
    this.dTheme = !this.dTheme;
    console.log(this.dTheme)
  }

  title = 'eztlz';
}
