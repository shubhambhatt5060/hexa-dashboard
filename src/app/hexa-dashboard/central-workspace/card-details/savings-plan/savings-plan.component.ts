import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings-plan',
  templateUrl: './savings-plan.component.html',
  styleUrls: ['./savings-plan.component.scss']
})
export class SavingsPlanComponent {
  @Input() productName: string | undefined = 'New Watch';
  @Input() productTarget: number = 2000;
  @Input() targetAchieved: number = 1000;
  @Input() productIcon: string | undefined = 'watch';

  progressPercentage() {
    return (this.targetAchieved/this.productTarget)*100;
  }
}
