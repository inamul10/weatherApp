import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }



  getWeatherData(cityName: any): Observable<WeatherData> {
    const headers = new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIHostKeyHeaderName, environment.XRapidAPIHostKeyHeaderValue);
  
    const params = new HttpParams()
      .set('q', cityName);
  
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, { headers, params });
  }
  
}
