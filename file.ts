// weather.component.ts
import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;
  error: string = '';

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.city)
      .subscribe(
        (data) => {
          this.weatherData = data;
          this.error = '';
        },
        (error) => {
          this.error = 'City not found';
          this.weatherData = null;
        }
      );
  }
}

