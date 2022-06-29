import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
  id: any;
  data: any[] = [];

  ngOnInit(): void {
    console.log('Tab1Page ngOnInit')
  }

  constructor(
    private router: Router,
    public navCtrl: NavController,
    public http: HttpClient
  ) {
    console.log('Tab1 page constructor')
    this.getData()
  }

  getData(){
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos').subscribe(data => {
      console.log('getData: ', data);
      this.data = data;
      this.id = data.id;
    }, err => {
      console.log(err)
    })
  }

  singleData(id){
    console.log('enter Click Function')
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos/'+ id).subscribe(data => {
      console.log('getData: ', data);
      // this.data = data;
      this.navCtrl.navigateForward('/tabs/items/' + data.id);
    }, err => {
      console.log(err)
    })
    
    
  }

  // getSingleData(id){
    
  // }
  

  // ionViewWillEnter(){
  //   console.log('Tab1Page ionViewWillEnter')
  // }

  // ionViewDidEnter(){
  //   console.log('Tab1Page ionViewDidEnter')
  // }

  // ionViewWillLeave(){
  //   console.log('Tab1Page ionViewWillLeave')
  // }

  // ionViewDidLeave(){
  //   console.log('Tab1Page ionViewDidLeave')
  // }

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
