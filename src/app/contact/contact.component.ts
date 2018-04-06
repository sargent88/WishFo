import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(f) {
    Swal({
      title: 'Awesome!',
      text: 'Thanks for your comment!',
      type: 'success',
    }).then(() => {
      window.location.href = "http://localhost:4200"
      console.log(window.location.href)
    })
    console.log(f.value)
  }

}
