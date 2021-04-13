import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() msgFooter: number;
  @Input() msgFooter2: number;

  extraPrice = 75;
  basePrice = 295.95;
  totalPrice = 295.95;

  constructor() {}

  ngOnInit(): void {}

  update() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.msgFooter);
    console.log(this.msgFooter2);
    console.log(this.totalPrice);
    this.asd();
  }
  asd() {
    if (this.msgFooter === 1) {
      if (this.msgFooter2 === 0 || this.msgFooter2 === undefined) {
        return (this.totalPrice = 370.95);
      }
      if (this.msgFooter2 === 1 && this.msgFooter2 !== undefined) {
        return (this.totalPrice = 445.95);
      }
    }
    if (this.msgFooter === 0) {
      if (this.msgFooter2 === 1 && this.msgFooter2 !== undefined) {
        return (this.totalPrice = 370.95);
      }
      if (this.msgFooter2 === 0 || this.msgFooter2 === undefined) {
        return (this.totalPrice = 295.95);
      }
    }

    if (this.msgFooter2 === 1) {
      if (this.msgFooter === 1 && this.msgFooter !== undefined) {
        return (this.totalPrice = 445.95);
      }
      if (this.msgFooter === 0 || this.msgFooter === undefined) {
        return (this.totalPrice = 370.95);
      }
    }
    if (this.msgFooter2 === 0) {
      if (this.msgFooter === 1 && this.msgFooter !== undefined) {
        return (this.totalPrice = 370.95);
      }
      if (this.msgFooter === 0 || this.msgFooter === undefined) {
        return (this.totalPrice = 295.95);
      }
    }
  }
}
