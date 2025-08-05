import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class weather {
  
  private apiKey= '118bf286ac766d1555a65763b7a6e51e';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {

    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'metric');

    return this.http.get(this.apiUrl, { params });
  }
      


}
