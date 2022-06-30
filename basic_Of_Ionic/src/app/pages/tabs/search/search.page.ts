import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('searchInput') sInput:any;

  model: any = {
    icon: 'search-outline',
    title: 'No Restaurants Record Found'
  };

  isLoading: boolean;
  query: any;

  restaurants: any[] = [];
  allRestaurants: any[] = [
    {
      cover: 'assets/imgs/pasta.jpg',
      name: 'Pasta',
      short_name: 'pasta',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      // distance: 2.5,
      price: 100
    },
    {
      cover: 'assets/imgs/pizza.jpg',
      name: 'Pizza',
      short_name: 'pizza',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      // distance: 2.5,
      price: 100
    },
    {
      cover: 'assets/imgs/salad.jpg',
      name: 'Salad',
      short_name: 'salad',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      // distance: 2.5,
      price: 100
    }
  ] ;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 50);
  }

  async onSearchChange(event){
    console.log(event.detail.value);
    this.query= event.detail.value.toLowerCase();
    this.restaurants = [];
    if(this.query.length > 0) {
      this.isLoading = true;
      this.restaurants = await this.allRestaurants.filter((element: any) => {
        console.log(element)
        console.log(element.short_name.includes(this.query))
        return element.short_name.includes(this.query);
      });
      console.log(this.restaurants);
      this.isLoading = false;
    }
  }

}
