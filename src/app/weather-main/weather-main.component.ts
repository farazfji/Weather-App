import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {

  city: string = undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  getcity(params:string) {
    console.log(params)
    this.city = params;
    this.router.navigate([`./city/${params}`] );
  }

}


