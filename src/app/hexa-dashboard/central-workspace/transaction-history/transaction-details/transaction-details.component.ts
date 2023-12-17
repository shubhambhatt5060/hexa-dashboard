import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent {

  name: string = '';
  type: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) data: any) { 
    this.name = data.name;
    this.type = data.type;
  }

}
