import { Observable } from 'rxjs/Observable';
import { CarsService } from './../services/cars.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {
  cars = [];

  constructor(
    private service: CarsService) { }

  ngOnInit() {
    this.service.getAll()
    // .finally(() => {
    //   console.log(this.cars.length)
    // })
    .subscribe(
      (cars) => {this.cars = cars},
      // (err) => {},
    );
  
  
  }

}
