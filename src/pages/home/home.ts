import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any[];

  constructor(public navCtrl: NavController) {
    this.items = [];
    for(let i = 0; i < 20; i++){
      this.items.push({
        text: 'Item ' + i,
        id: i
      });
    }

  }

  itemSelected(item){
    this.navCtrl.push(DetailPage,{
      item: item
    })
  }

}
