import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  banners: any[] = []
  restaurants: any[] = []

  constructor() { }

  ngOnInit() {
    this.banners = [
      {image: 'assets/imgs/salad.jpg'},
      {image: 'assets/imgs/2.jpg'},
      {image: 'assets/imgs/3.jpg'}
    ]
    this.restaurants =[
      {
        cover: 'assets/imgs/pasta.jpg',
        name: 'Pasta',
        cuisines: ['Italian', 'Mexican'],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      {
        cover: 'assets/imgs/pizza.jpg',
        name: 'Pizza',
        cuisines: ['Italian', 'Mexican'],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      {
        cover: 'assets/imgs/salad.jpg',
        name: 'Salad',
        cuisines: ['Italian', 'Mexican'],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      }
    ] 
  }

}
