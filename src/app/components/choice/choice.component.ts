import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css'],
})
export class ChoiceComponent implements OnInit {
  @ViewChild('thumb0', { static: true }) thumb0Element: ElementRef;
  @ViewChild('thumb1', { static: true }) thumb1Element: ElementRef;

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
      this.thumb0Element.nativeElement.style.setProperty(
        'border',
        '2px solid #1e96d4'
      );
      this.thumb1Element.nativeElement.style.setProperty(
        'border',
        '2px solid #eeeff2'
      );
    } else {
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
