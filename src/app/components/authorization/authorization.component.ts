import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      $(".info-item .btn").click(function(){
        $(".container").toggleClass("log-in");
      });
      $(".container-form .btn").click(function(){
        $(".container").addClass("active");
      });
    });
  }

}
