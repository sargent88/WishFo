import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  images = [
    "https://www.carfinderservice.com/car-advice/wp-content/uploads/2010/11/used-car-dealerships.jpg",
    "https://media.ed.edmunds-media.com/non-make/carbuying/carbuying_728131_600.jpg",
    "https://az528617.vo.msecnd.net/dealershipimages/Florida-Atlantic-DriveTime.jpg"
  ];

  constructor(config: NgbCarouselConfig) { 
    config.interval = 10000;
  }

  ngOnInit() {
  }

}
