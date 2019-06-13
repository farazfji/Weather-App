import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getCityWeather(cityName:string){

    let param = {
      q: cityName + ',pk',
      callback:'test',
      id:'2172797',
      units:"metricimperial",
      mode:"xml,html"
    };

    return this.http.get(environment.weatherApiUrl, {params: param})
    .pipe(
      map((response:string ) => {
      response = response.substring(5);
      response = response.substring(0, response.length - 1)
      response = JSON.parse (response);
      return response;
      })
    );
  } 
}
