import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {
  public savingList = [
    {
      productIcon: 'watch',
      productName: 'New Watch',
      productTarget:2000,
      targetAchieved:500
    },
    {
      productIcon: 'sports_esports',
      productName: 'Play Station 5',
      productTarget:2000,
      targetAchieved:1000
    },
    {
      productIcon: 'watch',
      productName: 'New Watch',
      productTarget:2000,
      targetAchieved:500
    },
    {
      productIcon: 'sports_esports',
      productName: 'Play Station 5',
      productTarget:2000,
      targetAchieved:1000
    },
    {
      productIcon: 'watch',
      productName: 'New Watch',
      productTarget:2000,
      targetAchieved:500
    },
    {
      productIcon: 'sports_esports',
      productName: 'Play Station 5',
      productTarget:2000,
      targetAchieved:1000
    }
  ]
}
