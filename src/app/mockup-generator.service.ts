import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { IMockupKey } from './mockup-main/mockup-key';
import { map } from 'rxjs/operators'; 
//import 'rxjs/add/operator/map';
import  { RequestOptions } from '@angular/http'


@Injectable({
  providedIn: 'root'
})
export class MockupGeneratorService {

	//private url: string = 'https://NB000512.pandero.com.pe:6080/mockup/key';

  constructor(private http: HttpClient) { }

  getCurrentTime() {
  	return this.http.get('http://date.jsontest.com ').pipe(
  			map(res => res)
  		)
  }

  postJSON() {
  	//const headers = new Headers().set("Content-Type", "application/json");
  	/*
  	var params = "json=" + json;
  	var headers = new Headers();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	*/ 

    let headers = new Headers({ 'Content-Type': 'application/json' });

  	return this.http.post('https://NB000512.pandero.com.pe:6080/mockup/key', headers )
  		.pipe(map(res=> {console.log(res)}, 
  			err => {console.log("error")}));
	  }
/*
 	setExample(): Observable<any> {
 		return this.http.post(this.url + )
 	}*/
 	//http://validate.jsontest.com/?json={"key":"value"}; t


}
