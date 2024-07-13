import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private apiUrl = 'https://api-desafio-front.vercel.app/api/data';

  constructor(private http: HttpClient) {}

  getCarouselData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
