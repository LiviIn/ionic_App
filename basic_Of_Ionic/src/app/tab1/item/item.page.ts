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
      // only for overwriting is apply in object array values are not overwrites only add values in array

      const object1 = {...this.items[0], price: 12, p_code: 10};// is used to add and overwriting the values
      // const object2 = {...object1}; // ... is a Spread Operators
      console.log('spreadOperators :', object1 )

      // const array1 = [...this.items, {id: 4, name: 'p3'}]; // is only for add not overwrite

      const array1 = [1,2,3,4];
      const array2 = [1,3,7,8];
      const array3 = [...array1, ...array2, 0,9];
      console.log('array3: ', array3)


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
