import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getParticipants(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/participants/`);
  }

  getParticipant(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/participants/${id}`);
  }

}
