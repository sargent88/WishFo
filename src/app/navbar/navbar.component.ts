import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show: boolean = false;

  constructor(config: NgbDropdownConfig) { 
    // console.log(config)
    config.autoClose = false;
  }

  toggleCollapse() {
    this.show = !this.show
  }

  ngOnInit() {
  }

}
