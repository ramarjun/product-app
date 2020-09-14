import { Component, OnInit, ViewChild, ElementRef, VERSION } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public messDiv: string;
    public arr: string [];
    public version: string;
    public addCls: boolean = false;
    
    constructor (){

    }

    
    ngOnInit(){
      
    }

    addclass(){
      this.addCls = !this.addCls;
    }
    

    


    
}
