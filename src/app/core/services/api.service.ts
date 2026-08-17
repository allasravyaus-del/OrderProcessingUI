import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://localhost:7215/api/v1';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {

    return this.http.get(
        `${this.baseUrl}/orders`
    );

}

}