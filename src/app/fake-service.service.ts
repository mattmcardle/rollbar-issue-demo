import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class FakeServiceService {

  constructor(private http: Http) { }

  get() {
    return this.http.get('http://fakehttpgeturl404.com/');
  }
}
