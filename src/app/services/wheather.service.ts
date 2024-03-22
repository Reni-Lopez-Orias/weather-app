import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { Weather } from '../models/weather.model';
import { ResponseWeatherApi } from '../models/response-weather-api.model';

import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  key_Weather: string = environment.apiKeyWeather;

  constructor(
    private http: HttpClient
  ) {
  }

  getWeather(location: string): Observable<Weather> {
    return this.http.get<ResponseWeatherApi>(`http://api.weatherapi.com/v1/current.json?key=${this.key_Weather}&q=${location}&aqi=no`).pipe(
      map((response: ResponseWeatherApi) => {

        return {
          location: `${response.location.name}, ${response.location.region}, ${response.location.country}`,
          icon: response.current.condition.icon,
          description: response.current.condition.text,
          humidity: response.current.humidity,
          wind: response.current.wind_kph,
          temp: response.current.temp_c
        };

      }),

      catchError((error: any) => {
        // Aquí puedes jerarquizar los errores HTTP
        if (error.status === 404 || error.status === 400) {
          return throwError('No data found for the location provided.');
        } else if (error.status === 401) {
          return throwError('Not authorized to access weather data.');
        } else {
          return throwError('An error occurred while fetching weather data.');
        }
      })

    );
  }


}
