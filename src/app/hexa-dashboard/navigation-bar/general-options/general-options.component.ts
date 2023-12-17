import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-options',
  templateUrl: './general-options.component.html',
  styleUrls: ['./general-options.component.scss']
})
export class GeneralOptionsComponent {

  public generalList = [{
    menuName: 'Settings',
    menuIcon: 'settings'
  },
  {
    menuName: 'Help/Support',
    menuIcon: 'contact_support'
  },
  {
    menuName: 'Dark Mode',
    menuIcon: 'dark_mode'
  }
]

}
