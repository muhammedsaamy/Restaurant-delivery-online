import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResaurantService {

  constructor(private http:HttpClient) { }

  getRestaurants() : Observable<any>
  {
    return this.http.get('https://localhost:7264/Restaurant')
  }
}
