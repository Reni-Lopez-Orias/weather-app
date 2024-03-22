import { Component } from '@angular/core';
import { WheatherService } from './services/wheather.service';
import { Weather } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msg_error: string = '';
  loading: boolean = false;
  location_search: string = '';
  weather_data: Weather = new Weather();

  constructor(
    private weatherService: WheatherService
  ) {
  }

  search() {

    this.loading = true;
    this.weather_data = new Weather();
    this.msg_error = '';

    this.weatherService.getWeather(this.location_search).subscribe(
      (response: Weather) => {
        if (response) {
          this.weather_data = response;
        }
      },
      (error: string) => {
        this.msg_error = error;
      }
    ).add(() => {
      this.loading = false;
    });

  }

}
