import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarathonCenterService {
  baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getMarathonCenters(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/centers`);
  }

  getMarathonCenter(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/centers/${id}`);
  }
}
