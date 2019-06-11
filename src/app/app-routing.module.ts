import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';


const routes: Routes = [
  { path: '', component: WeatherMainComponent },
  { path: 'city/:city', component: WeatherDetailComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
