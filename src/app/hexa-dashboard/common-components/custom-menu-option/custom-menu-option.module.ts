import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMenuOptionComponent } from './custom-menu-option.component';



@NgModule({
  declarations: [CustomMenuOptionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CustomMenuOptionComponent
  ]
})
export class CustomMenuOptionModule { }
