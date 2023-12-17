import { Component, Input } from '@angular/core';
import {  MatDialog } from '@angular/material/dialog';
import { Transaction } from 'src/app/model/dashboard-model';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent {
  @Input() transactionData: Transaction[] | undefined;
  constructor(private dialogRef: MatDialog) { }
  showDetails(trans: Transaction) {
    this.dialogRef.open(TransactionDetailsComponent, {
      width: '250px',
      height: '300px',
      data: { name: trans.name, type: trans.type }
    });
  }
}

