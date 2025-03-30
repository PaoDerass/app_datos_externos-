import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviorements';
import { Cat, Breed } from '../models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiUrl = environment.apiUrl;
  private headers = new HttpHeaders({ 'x-api-key': environment.apiKey });

  constructor(private http: HttpClient) {}

  getRandomCats(limit: number = 10): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.apiUrl}/images/search?limit=${limit}&has_breeds=1`, { headers: this.headers });
  }

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${this.apiUrl}/breeds`, { headers: this.headers });
  }
}
