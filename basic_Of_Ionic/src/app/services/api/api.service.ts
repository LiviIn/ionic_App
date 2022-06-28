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
    }
  ]

  constructor() { }

  getItems(){
    // this.items  = [
    //   {
    //     id: 1,
    //     name: 'product1',
    //     description: 'Lorem Lorem',
    //     price: 20
    //   },
    //   {
    //     id: 2,
    //     name: 'product2',
    //     description: 'Lorem Lorem',
    //     price: 30
    //   }
    // ]

    return this.items
  }

  getItem(id){
    const item = this.items.find(x => x.id == id)
    return item
  }
}
