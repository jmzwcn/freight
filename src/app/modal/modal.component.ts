import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
declare var AMap;

@Component({
  selector: 'app-model',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('map_container') map_container: ElementRef;
  map: any; // 地图对象
  iframe: SafeResourceUrl;
  constructor(
    private modalController: ModalController,
    private geolocation: Geolocation,
    public sanitizer: DomSanitizer) {
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl('https://m.amap.com/picker/?key=60d396703bef1a6a93d2eca45a70e764');
  }

  ngOnInit() {
  }

  confirmLocation() {
    this.modalController.dismiss();
  }

  ionViewDidEnter() {
    this.geolocation.getCurrentPosition();
    setTimeout(() => {
      const a = this.map_container.nativeElement.contentWindow;
      a.postMessage('hello', '*');
      window.addEventListener('message', (e) => {
        // alert('您选择了:' + e.data.name + ',' + e.data.location);
        // this.events.publish('MapSelect', e);
        // this.viewCtrl.dismiss();
        // console.log(e.data);
        this.modalController.dismiss(e.data);
      }, false);
    }, 2000);
    // this.map = new AMap.Map(this.map_container.nativeElement, {
    //   view: new AMap.View2D({ // 创建地图二维视口
    //     zoom: 11, // 设置地图缩放级别
    //     rotateEnable: true,
    //     // center: [116.2314939, 40.2071555], // 设置地图中心点坐标
    //     showBuildingBlock: true
    //   })
    // });
    // AMap.service('AMap.Geolocation', () => {
    //   const geolocation = new AMap.Geolocation({});
    //   this.map.addControl(geolocation);
    // });
  }

}
