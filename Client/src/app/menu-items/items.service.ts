import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }

  getitems(restaurantId:number) : Observable<any>
  {
    return this.http.get('https://localhost:7264/Menu?restaurantId=' + restaurantId)
  }
}
