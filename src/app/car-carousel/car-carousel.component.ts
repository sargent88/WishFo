import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-carousel',
  templateUrl: './car-carousel.component.html',
  styleUrls: ['./car-carousel.component.css']
})
export class CarCarouselComponent implements OnInit {
  // images = [
  //   "https://dummyimage.com/350x180/000/fff.png",
  //   "https://dummyimage.com/350x180/764/fff.png",
  //   "https://dummyimage.com/350x180/576/fff.png",
  //   "https://dummyimage.com/350x180/184/fff.png",
  //   "https://dummyimage.com/350x180/938/fff.png"
  // ];
  @Input() car = [];
  
  constructor() { }

  ngOnInit() {
    
  }

}
