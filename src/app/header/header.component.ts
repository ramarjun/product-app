import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  addCls:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  addclass(){
      this.addCls = !this.addCls;
  }
}
