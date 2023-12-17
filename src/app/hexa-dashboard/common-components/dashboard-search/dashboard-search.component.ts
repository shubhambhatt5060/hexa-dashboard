import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.scss']
})
export class DashboardSearchComponent implements OnInit {

  constructor() { }
  @Input()
  placeholder: string = 'Search';
  @Input()
  bgColor = '#ffffff'
  ngOnInit(): void {
  }

}
