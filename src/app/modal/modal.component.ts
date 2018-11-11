import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
declare var AMap;

@Component({
  selector: 'app-model',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('map_container') map_container: ElementRef;
  iframe: SafeResourceUrl;

  constructor(
    private modalController: ModalController,
    private sanitizer: DomSanitizer) {
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl('https://m.amap.com/picker/?key=60d396703bef1a6a93d2eca45a70e764');
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const a = this.map_container.nativeElement.contentWindow;
    a.postMessage('hello', '*');
    window.addEventListener('message', (e) => {
      this.modalController.dismiss(e.data);
    }, false);
  }

  getLocation() {
    alert('here.');
  }
}
