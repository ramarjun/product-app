import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyMainService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('../assets/data.json');
  }



}