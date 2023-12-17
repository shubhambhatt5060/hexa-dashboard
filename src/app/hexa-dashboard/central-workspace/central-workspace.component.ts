import { Component, OnInit } from '@angular/core';
import { HexaDashboardService } from '../services/hexa-dashboard.service';
import { Dashboard } from 'src/app/model/dashboard-model';

@Component({
  selector: 'app-central-workspace',
  templateUrl: './central-workspace.component.html',
  styleUrls: ['./central-workspace.component.scss']
})
export class CentralWorkspaceComponent implements OnInit {

  constructor(private service: HexaDashboardService) { }
  public dashboardData: Dashboard | undefined
  ngOnInit(): void {
    this.service.getDashboardDetails().subscribe((e)=> {
      this.dashboardData = e;
    },error => {
      console.error('Error occured while fetching data', error);
      
    })
  }

}
