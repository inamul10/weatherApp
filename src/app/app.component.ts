import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatheData(this.cityName)
    this.cityName = '';
  }

  weatherData: any;
  cityName?:any = 'London';
  title = 'weatherApp';

  onSubmit() {
   this.getWeatheData(this.cityName)
   this.cityName = '';
}

private getWeatheData(cityName: any) {
  this.weatherService.getWeatherData(cityName).subscribe(
    (response) => {
      this.weatherData = response;
    
    }
  );
}
}