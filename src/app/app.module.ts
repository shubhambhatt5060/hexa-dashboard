import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from "ng-apexcharts";
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import { NavigationBarComponent } from './hexa-dashboard/navigation-bar/navigation-bar.component';
import { DashboardCardModule } from './hexa-dashboard/common-components/dashboard-card/dashboard-card.module';
import { CentralWorkspaceComponent } from './hexa-dashboard/central-workspace/central-workspace.component';
import { LogoComponent } from './hexa-dashboard/navigation-bar/logo/logo.component';
import { DashboardSearchModule } from './hexa-dashboard/common-components/dashboard-search/dashboard-search.module';
import { DashboardIconsModule } from './hexa-dashboard/common-components/dashboard-icons/dashboard-icons.module';
import { MenuOptionsComponent } from './hexa-dashboard/navigation-bar/menu-options/menu-options.component';
import { GeneralOptionsComponent } from './hexa-dashboard/navigation-bar/general-options/general-options.component';
import { UserAccountComponent } from './hexa-dashboard/navigation-bar/user-account/user-account.component';
import { HorizontalRuleModule } from './hexa-dashboard/common-components/horizontal-rule/horizontal-rule.module';
import { CustomMenuOptionModule } from './hexa-dashboard/common-components/custom-menu-option/custom-menu-option.module';
import { CardDetailsComponent } from './hexa-dashboard/central-workspace/card-details/card-details.component';
import { SavingsPlanComponent } from './hexa-dashboard/central-workspace/card-details/savings-plan/savings-plan.component';
import { TotalBalanceComponent } from './hexa-dashboard/central-workspace/total-balance/total-balance.component';
import { MoneyStaticticsComponent } from './hexa-dashboard/central-workspace/money-statictics/money-statictics.component';
import { TransactionHistoryComponent } from './hexa-dashboard/central-workspace/transaction-history/transaction-history.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TransactionDetailsComponent } from './hexa-dashboard/central-workspace/transaction-history/transaction-details/transaction-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CentralWorkspaceComponent,
    LogoComponent,
    UserAccountComponent,
    MenuOptionsComponent,
    GeneralOptionsComponent,
    CardDetailsComponent,
    SavingsPlanComponent,
    TotalBalanceComponent,
    MoneyStaticticsComponent,
    TransactionHistoryComponent,
    TransactionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    DashboardCardModule,
    DashboardSearchModule,
    DashboardIconsModule,
    HorizontalRuleModule,
    CustomMenuOptionModule,
    HttpClientModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
