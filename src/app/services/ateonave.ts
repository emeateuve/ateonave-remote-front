import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/env';

@Injectable({
  providedIn: 'root',
})
export class Ateonave {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  post<T>(endpoint: string, body: any = null): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/api/${endpoint}`, body);
  }
}
