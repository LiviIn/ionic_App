import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
  id = 1;

  constructor(
    private router: Router,
    public navCtrl: NavController
  ) {}

  ngOnInit(): void {
    console.log('Tab1Page ngOnInit')
  }

  ionViewWillEnter(){
    console.log('Tab1Page ionViewWillEnter')
  }

  ionViewDidEnter(){
    console.log('Tab1Page ionViewDidEnter')
  }

  ionViewWillLeave(){
    console.log('Tab1Page ionViewWillLeave')
  }

  ionViewDidLeave(){
    console.log('Tab1Page ionViewDidLeave')
  }

  redirect(){
    // this.router.navigateByUrl('/tabs/tab1/item', {replaceUrl: true})
    const data = {name: "abc", id: this.id}
    const navData: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(data)
      }
    }
    // use this Router Navigate to Extra Data:
    // this.router.navigate(['/', 'tabs', 'items', this.id],navData)

    // use navController in control a navigation
    this.navCtrl.navigateForward('/tabs/items/' + this.id,navData);
  }

  ngOnDestroy(): void {
    console.log('Tab1Page ngOnDestroy')
  }

}
