import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
 city: string;
 cityWeather: any;
 error = false;
 
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.city = this.route.snapshot.paramMap.get('city');    
    this.weatherService.getCityWeather(this.city)
    .subscribe((response: any)=>{
      this.cityWeather = response;
    }, (err) => {
      this.error = true;    
    });
  }

  goBack(): void {
    this.location.back();
  }

}
