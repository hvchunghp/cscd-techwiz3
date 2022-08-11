import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onActivate(event: any) {
    window.scroll({
      top: 0,
      left: 10,
      behavior: 'smooth',
    });
  }
}
