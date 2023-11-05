import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Plant } from '../models/plant.model';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class PlantRequestService {
  private readonly baseUrl = `${environment.baseUrl}`;
  constructor(private http: HttpClient) {}

  getPants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.baseUrl);
  }
}
