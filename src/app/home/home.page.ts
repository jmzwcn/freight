import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentFreight: any;
  sliderConfig = {
    slidesPerView: 4,
    effect: 'flip'
  };

  freights = [
    { 'name': '小面包车', 'icon': 'assets/img/1.jpeg', 'weight': '800公斤', 'lwh': '1.8*1.2*1.1米', 'cube': '2.4方' },
    { 'name': '中面包车', 'icon': 'assets/img/2.jpeg', 'weight': '1.2吨', 'lwh': '2.8*1.5*1.3米', 'cube': '2.4方' },
    { 'name': '小货车', 'icon': 'assets/img/8.png', 'weight': '1.5吨', 'lwh': '2.1*1.7*1.6米', 'cube': '5.7方' },
    { 'name': '中货车', 'icon': 'assets/img/7.png', 'weight': '800公斤', 'lwh': '1.8*1.2*1.1米', 'cube': '2.4方' },
    { 'name': '大货车', 'icon': 'assets/img/9.png', 'weight': '800公斤', 'lwh': '1.8*1.2*1.1米', 'cube': '2.4方' }
  ];

  constructor() {
    this.currentFreight = this.freights[0];
  }

  itemClick(freight) {
    this.currentFreight = freight;
  }
}
