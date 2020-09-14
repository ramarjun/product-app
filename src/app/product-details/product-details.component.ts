import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyMainService } from '../main-services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public dataAvail:boolean = false; 
  public product: any[];
  constructor(public route: ActivatedRoute, public _sf: MyMainService) { }

  ngOnInit() {
    this.getDataofproduct(this.route.snapshot.params.id);
  }

  getDataofproduct(id: number) {
    this._sf.getProducts().subscribe((data) => {
      let arr = data['products'];
      const arVal = [];
      arr.forEach((p) => {
            if (p.id == id) {
              this.product = p;
            }
      });
      this.dataAvail = true;
    });
  }
}
