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
    this.items = this.apiService.getItems()
  }

}
