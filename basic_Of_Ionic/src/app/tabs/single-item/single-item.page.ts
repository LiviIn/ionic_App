import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.page.html',
  styleUrls: ['./single-item.page.scss'],
})
export class SingleItemPage implements OnInit {

  id: any;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    // use the ActivatedRoute get the Active route paramID
    this.id = this.route.snapshot.paramMap.get('id');

    // use to getting the Active route ParamsData
    const data = this.route.snapshot.queryParams
    console.log("queryParams: ", data);
    if(data?.data) {
      const currentObj = JSON.parse(data.data);
      const Name = currentObj.name
      const ID = currentObj.id
      // Const id = currentObj.id
      console.log("name: ",Name, "id: ",ID)
    }

  }

}
