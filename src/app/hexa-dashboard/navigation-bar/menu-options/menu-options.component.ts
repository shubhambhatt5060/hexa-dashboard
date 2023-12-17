import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.scss']
})
export class MenuOptionsComponent {
  public menuList = [{
    menuName: 'Overview',
    menuIcon: 'grid_view'
  },
  {
    menuName: 'Transaction',
    menuIcon: 'menu'
  },
  {
    menuName: 'Analytics',
    menuIcon: 'analytics'
  },
  {
    menuName: 'Cards',
    menuIcon: 'credit_card'
  }
]
}
