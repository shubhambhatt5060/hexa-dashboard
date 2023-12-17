import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/model/dashboard-model';

@Injectable({
  providedIn: 'root'
})
export class HexaDashboardService {

  constructor(private http:HttpClient) { }

  private dashboardUrl = 'https://1.api.fy23ey06.careers.ifelsecloud.com';

  public getDashboardDetails(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.dashboardUrl);
  }
}
