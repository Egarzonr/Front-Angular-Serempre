import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.css'],
})
export class WarrantyComponent implements OnInit {
  @Output() msgfromWarranty = new EventEmitter<number>();
  @ViewChild('thumb0', { static: true }) thumb0Element: ElementRef;
  @ViewChild('thumb1', { static: true }) thumb1Element: ElementRef;

  wPrice: number;

  constructor() {}

  ngOnInit(): void {
    this.thumb0Element.nativeElement.style.setProperty(
      'border',
      '2px solid #1e96d4'
    );
  }

  carousel(id) {
    // console.log(id);
    if (id == 0) {
      this.wPrice = id;
      console.log(this.wPrice);
      this.msgfromWarranty.emit(this.wPrice);

      this.thumb0Element.nativeElement.style.setProperty(
        'border',
        '2px solid #1e96d4'
      );
      this.thumb1Element.nativeElement.style.setProperty(
        'border',
        '2px solid #eeeff2'
      );
    } else {
      this.wPrice = id;
      console.log(this.wPrice);
      this.msgfromWarranty.emit(this.wPrice);

      this.thumb1Element.nativeElement.style.setProperty(
        'border',
        '2px solid #1e96d4'
      );
      this.thumb0Element.nativeElement.style.setProperty(
        'border',
        '2px solid #eeeff2'
      );
    }
  }
}
