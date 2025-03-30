import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviorements';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiUrl = environment.apiUrl;
  private headers = new HttpHeaders({ 'x-api-key': environment.apiKey });

  constructor(private http: HttpClient) {}

  getRandomCats(limit: number = 10): Observable<any> {
    return this.http.get(`${this.apiUrl}/images/search?limit=${limit}`, { headers: this.headers });
  }

  getBreeds(): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds`, { headers: this.headers });
  }
}
