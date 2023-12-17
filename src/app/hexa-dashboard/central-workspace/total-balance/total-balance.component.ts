import { Component, Input, OnInit } from '@angular/core';
import { Balance } from 'src/app/model/dashboard-model';

@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.component.html',
  styleUrls: ['./total-balance.component.scss']
})
export class TotalBalanceComponent {

  @Input() public set totalBalanceData(e: Balance | undefined) {
    if (!e) return;
    this.totalBalance = e.total_balance;
    this.monthlyLimitUsed = e.payment_done_so_far;
    this.monthlyPaymentLimit = e.monthly_payment_limit;
  }
  totalBalance: number = 120000.00;
  monthlyPaymentLimit: number = 35000;
  monthlyLimitUsed: number = 10500;


}
