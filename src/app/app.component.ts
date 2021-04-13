import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularSe';

  sendFooter: number;
  sendFooter2: number;

  msgforFooter(mensaje: number) {
    this.sendFooter = mensaje;
    console.log(this.sendFooter);
  }
  msgforFooterTwo(mensaje: number) {
    this.sendFooter2 = mensaje;
    console.log(this.sendFooter2);
  }
}
