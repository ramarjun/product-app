import { Component, OnInit } from '@angular/core';
import { MyMainService } from '../main-services';
import { Router } from '@angular/router';
import { Menu } from '../types/Menu';
import { Config } from '../types/Config';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public dataAvail: any;
  public config: any;
  public isLoading: boolean = false;
  isDataAvailable: boolean = false;
  options: Config = { multi: false };
  
  menus: Menu[] = [
    { 
      name: 'Collection',
      active: false,
      submenu: [
        { name: 'TV', url: '#' }  
        
      ]
    },
    { 
      name: 'Colors',
      active: false,
      submenu: [
        { name: 'Red', url: '#' },
        { name: 'blue', url: '#' }
        
      ]
    },
    { 
      name: 'Category',
      active: false,
      submenu: [
        { name: 'Lounch', url: '#' },
        { name: 'Armchar', url: '#' }
      ]
    }
  ];
  constructor(public _sf: MyMainService, public router: Router) { }

  ngOnInit() {
    
    this.getDataofproduct();
    this.config = this.mergeConfig(this.options);
  }

  getDataofproduct() {
    this.isLoading = true;

    this._sf.getProducts().subscribe((data) => {
      console.log(data['responseCode']);
      if(data['responseCode'] === 200){
        this.isDataAvailable = true;
        this.isLoading = false;
        this.dataAvail = data['products'];
        const arVal = [];
        for (let i = 0; i < this.dataAvail.length; i++) {
          this.dataAvail[i].range = [];
          for (let j = 0; j < 5; j++) {
            this.dataAvail[i]['range'].push(j + 1);
          }
        }
      }else{
        this.isDataAvailable = false;
        this.isLoading = false;
      }
      
    });
  }

  isMarked(index, val) {
    if (val >= index + 1) {
      return 'fa fa-star';
    }
    else if (val > index && val < index + 1) {
      return 'fa fa-star-half-o';
    }
    else {
      return 'fa fa-star-o';
    }
  }

  mergeConfig(options: Config) {
    const config = {
      multi: true
    };

    return { ...config, ...options };
  }

  toggle(index: number) {
    if (!this.config.multi) {
      this.menus.filter(
        (menu, i) => i !== index && menu.active
      ).forEach(menu => menu.active = !menu.active);
    }
    this.menus[index].active = !this.menus[index].active;
  }

}
