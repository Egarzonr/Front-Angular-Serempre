import {
  Component,
  ElementRef,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @ViewChild('mainImg', { static: true }) mainImgElement: ElementRef;
  @ViewChild('thumb1', { static: true }) thumb0Element: ElementRef;
  @ViewChild('thumb2', { static: true }) thumb1Element: ElementRef;
  @ViewChild('thumb3', { static: true }) thumb2Element: ElementRef;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.mainImgElement);
    this.thumb0Element.nativeElement.style.setProperty(
      'border',
      '2px solid #1e96d4'
    );
  }

  carousel(id) {
    // console.log(id);
    if (id == 0) {
      this.mainImgElement.nativeElement.src = this.thumb0Element.nativeElement.src;
      this.thumb0Element.nativeElement.style.setProperty(
        'border',
        '2px solid #1e96d4'
      );
      this.thumb1Element.nativeElement.style.setProperty(
        'border',
        '2px solid #eeeff2'
      );
      this.thumb2Element.nativeElement.style.setProperty(
        'border',
        '2px solid #eeeff2'
      );
    } else if (id == 1) {
      this.mainImgElement.nativeElement.src = this.thumb1Element.nativeElement.src;
      this.thumb1Element.nativeElement.style.setProperty(
        'border',
        '2px solid #1e96d4'
      );
      this.thumb0Element.nativeElement.style.setProperty(
        'border',
        '2px solid #eeeff2'
      );
      this.thumb2Element.nativeElement.style.setProperty(
        'border',
        '2px solid #eeeff2'
      );
    } else {
      this.mainImgElement.nativeElement.src = this.thumb2Element.nativeElement.src;
      this.thumb2Element.nativeElement.style.setProperty(
        'border',
        '2px solid #1e96d4'
      );
      this.thumb0Element.nativeElement.style.setProperty(
        'border',
        '2px solid #eeeff2'
      );
      this.thumb1Element.nativeElement.style.setProperty(
        'border',
        '2px solid #eeeff2'
      );
    }
  }
}
