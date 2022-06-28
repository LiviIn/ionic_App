import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  id = 1;

  constructor(
    private router: Router
  ) {}

  redirect(){
    // this.router.navigateByUrl('/tabs/tab1/item', {replaceUrl: true})
    const data = {name: "abc", id: this.id}
    const navData: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(data)
      }
    }
    // use this Router Navigate to Extra Data:
    this.router.navigate(['/', 'tabs', 'items', this.id],navData)
  }

}
