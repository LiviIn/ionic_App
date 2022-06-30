import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  id: any;
  data = {};
  items: any[] = [];
  restaurants =[
    {
      uid: '12hkjhusapasta',
      cover: 'assets/imgs/pasta.jpg',
      name: 'Pasta',
      short_name: 'pasta',
      address: 'Kanyakumari, Tamilnadu',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100
    },
    {
      uid: '12hkjhusapizza',
      cover: 'assets/imgs/pizza.jpg',
      name: 'Pizza',
      short_name: 'pizza',
      address: 'Kanyakumari, Tamilnadu',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100
    },
    {
      uid: '12hkjhusasalad',
      cover: 'assets/imgs/salad.jpg',
      name: 'Salad',
      short_name: 'salad',
      address: 'Kanyakumari, Tamilnadu',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100
    }
  ] ;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data =>{
      console.log('data: ', data);
      if(!data.has('restaurantId')){
        this.navCtrl.back();
        return;
      }
      this.id = data.get('restaurantId');
      console.log('id: ', this.id)
      this.getItems();
    })
  }

  getItems(){
    this.data = {};
    let data: any = this.restaurants.filter(x => x.uid === this.id);
    this.data = data[0];
    console.log('restaurant: ', this.data)
  }

  getCuisine(cuisine){
    return cuisine.join(', ')
  }

}
