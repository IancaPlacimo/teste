import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private apiUrl =
    'https://6692a64d346eeafcf46db31d.mockapi.io/api/data/comentarios';

  constructor(private http: HttpClient) {}

  getCarouselData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
