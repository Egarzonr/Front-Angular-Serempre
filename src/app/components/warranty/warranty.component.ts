import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.css'],
})
export class WarrantyComponent implements OnInit {
  @Output() msgfromWarranty = new EventEmitter<number>();

  wPrice: number = 75;

  constructor() {}

  ngOnInit(): void {}

  sendWarrantyMsg() {
    console.log(this.wPrice);
    this.msgfromWarranty.emit(this.wPrice);
  }
}
