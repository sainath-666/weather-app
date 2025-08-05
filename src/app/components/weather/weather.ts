import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { weather } from '../../services/weather';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.html',
  styleUrls: ['./weather.css'],
})
export class Weather {
  city: string = '';
  weatherData: any = null;
  errorMsg: string = '';

  constructor(private weatherService: weather) {}

  getWeather() {
    if (!this.city) return;

    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.errorMsg = '';
      },
      error: () => {
        this.weatherData = null;
        this.errorMsg = 'City not found. Please try again.';
      },
    });
  }
}
