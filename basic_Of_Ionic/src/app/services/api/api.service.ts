import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    {
      id: 1,
      name: 'product1',
      description: 'Lorem Lorem',
      price: 20
    },
    {
      id: 2,
      name: 'product2',
      description: 'Lorem Lorem',
      price: 30
    },
    {
      id: 3,
      name: 'product2',
      description: 'Lorem Lorem',
      price: 25
    }
  ]

  constructor() { }

  getItems(): Promise<any>{
    // return this.items
    return new Promise((resolve, reject) => {
      let items: any[] = [];
      for(let i = 0; i < this.items.length; i++){
        if(this.items[i].price <= 25){
          items.push(this.items[i])
        }
      }

      // items = this.items.filter(x => x.price <= 25)

      if(items.length > 0) resolve(items);
      else reject('High price')
    })
  }

  checkTotal(data): Promise<any>{
    return new Promise((resolve, reject) =>{
      let sum = 0;
      for(let i = 0; i< DataTransfer.length; i++){
        sum += data[i].price; //sum = sum + data[i].price;
      }

      if(sum <= 20){
        resolve(true);
      }else {
        reject('Can\'t be listed');
      }
    })
  }

  getItem(id){
    const item = this.items.find(x => x.id == id)
    return item
  }
}
