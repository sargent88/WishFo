import { Observable } from 'rxjs/Observable';
import { CarsService } from './../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-one-car',
  templateUrl: './one-car.component.html',
  styleUrls: ['./one-car.component.css']
})
export class OneCarComponent implements OnInit {
  id: number;
  car = [];
  cars = [];

  constructor(
    private route: ActivatedRoute,
    private service: CarsService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id']
      })

    this.service.get(this.id)
      .subscribe(
        (res) => {for(var i=0; i<res.length; i++){
          if(res[i].id === this.id) {
            return this.car = res[i]
          }
        }}
      )
  }

}
