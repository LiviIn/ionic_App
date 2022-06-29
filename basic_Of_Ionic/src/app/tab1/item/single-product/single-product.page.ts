import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.page.html',
  styleUrls: ['./single-product.page.scss'],
})
export class SingleProductPage implements OnInit {

  item: Product;

  constructor(
    private route: ActivatedRoute,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.item = this.apiService.getItem(id)
  }

}
