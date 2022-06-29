import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.page.html',
  styleUrls: ['./single-item.page.scss'],
})
export class SingleItemPage implements OnInit, OnDestroy {

  id: any;
  data = {};

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    public http: HttpClient
    ) { }

  ngOnInit() {
    console.log('SingleItemPage ngOnInit')
    // use the ActivatedRoute get the Active route paramID
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("queryParams: ", this.id);
    this.getSingleData(this.id);
   
    // use to getting the Active route ParamsData
    // const data = this.route.snapshot.queryParams
    
    // if(data?.data) {
    //   const currentObj = JSON.parse(data.data);
    //   const Name = currentObj.name
    //   const ID = currentObj.id
    //   // Const id = currentObj.id
    //   console.log("name: ",Name, "id: ",ID)
    // }
  }

  getSingleData(id){
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos/'+ id).subscribe(data => {
      console.log('getData: ', data);
      this.data = data;
      
    }, err => {
      console.log(err)
    })
  }

  ngOnDestroy(): void {
    console.log('SingleItemPage ngOnDestroy')
  }

  // ionViewWillEnter(){
  //   console.log('SingleItemPage ionViewWillEnter')
  // }


  // ionViewDidEnter(){
  //   console.log('SingleItemPage ionViewDidEnter')
  // }

  // ionViewWillLeave(){
  //   console.log('SingleItemPage ionViewWillLeave')
  // }

  // ionViewDidLeave(){
  //   console.log('SingleItemPage ionViewDidLeave')
  // }

  
}
