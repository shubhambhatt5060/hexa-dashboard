import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-icons',
  templateUrl: './dashboard-icons.component.html',
  styleUrls: ['./dashboard-icons.component.scss']
})
export class DashboardIconsComponent implements OnInit {
  @Input() icon: string | undefined = 'help_center'
  @Input() iconName: string | undefined;
  @Input() iconColor: string = '#d1d3de';
  constructor() { }

  ngOnInit(): void {
  }

}
