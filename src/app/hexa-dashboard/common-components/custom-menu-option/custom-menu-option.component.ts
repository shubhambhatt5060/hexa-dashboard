import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-menu-option',
  templateUrl: './custom-menu-option.component.html',
  styleUrls: ['./custom-menu-option.component.scss']
})
export class CustomMenuOptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() optionIcon: string = 'menu';
  @Input() optionLabel: string = 'Menu option';
}
