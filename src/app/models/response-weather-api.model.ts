export class ResponseWeatherApi {
  location: Location = new Location();
  current: CurrentWeather = new CurrentWeather();
}

export class Location {
  name: string = '';
  region: string = '';
  country: string = '';
  lat: number = 0;
  lon: number = 0;
  tz_id: string = '';
  localtime_epoch: number = 0;
  localtime: string = '';
}

export class CurrentWeather {
  last_updated_epoch: number = 0;
  last_updated: string = '';
  temp_c: number = 0;
  temp_f: number = 0;
  is_day: number = 0;
  condition: Condition = new Condition();
  wind_mph: number = 0;
  wind_kph: number = 0;
  wind_degree: number = 0;
  wind_dir: string = '';
  pressure_mb: number = 0;
  pressure_in: number = 0;
  precip_mm: number = 0;
  precip_in: number = 0;
  humidity: number = 0;
  cloud: number = 0;
  feelslike_c: number = 0;
  feelslike_f: number = 0;
  vis_km: number = 0;
  vis_miles: number = 0;
  uv: number = 0;
  gust_mph: number = 0;
  gust_kph: number = 0;
}

export class Condition {
  text: string = '';
  icon: string = '';
  code: number = 0;
}
