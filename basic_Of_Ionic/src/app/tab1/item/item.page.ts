import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  items: any[] = [];

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit() {
    console.log('ngOnInit')
    // this.items = this.apiService.getItems()
    this.getData();
  }

  async getData(){
    try{
      const data = await this.apiService.getItems();
      const val = await this.apiService.checkTotal(data);
      if(val){
        this.items = data;
      }
    }catch(err){
      console.error(err)
    }
    
    // this.apiService.getItems().then(data => {
    //   console.log(data)
    //   this.apiService.checkTotal(data).then(val => {
    //     console.log(val)
    //     if(val){
    //       this.items = data
    //     }
    //   }).catch(err =>{
    //     console.error(err)
    //   })
      
    // }).catch(err => {
    //   console.log(err)
    // })
  }

}
