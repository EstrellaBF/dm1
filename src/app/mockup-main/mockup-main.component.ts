import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { MockupGeneratorService } from '../mockup-generator.service';


@Component({
  selector: 'app-mockup-main',
  templateUrl: './mockup-main.component.html',
  styleUrls: ['./mockup-main.component.css', '../app.component.css']
})
export class MockupMainComponent implements OnInit {
	public selectedType: string = '';
	public currentSelect: string = 'json';
	public newRow: string = 'holarow';

  getData: string;
  postData: string;

  node : string = 'holanode';
  url = {
    id: 1,
    name: 'Aquí va la ruta generada automáticamente'
  };

  @ViewChild('myButton') myButton : ElementRef;

  constructor(private httpService: MockupGeneratorService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }

  onTestGet() {
    this.httpService.getCurrentTime()
      .subscribe(
          data => this.getData = JSON.stringify(data),
          error => console.log(error),
          () => console.log('completed') 
        );
  }

  onTestPost() {
    this.httpService.postJSON()
    .subscribe(
      data => this.postData = JSON.stringify(data),
      error => console.log(error),
      () => console.log('completed') 
    )
  }

  selectType() {
  	console.log(this.selectedType)
  }

  addRow() {
    console.log("añade fila");
    /*
    const p = document.createElement('p');
    const ell = this.el.nativeElement.cloneNode(true);
    p.appendChild(ell);
    this.node = p.innerHTML;
    */
    const tr = this.renderer.createElement('tr');
    const th = this.renderer.createElement('th');
    const input1 = this.renderer.createElement('input');
    const input2 = this.renderer.createElement('input');
    //const text = this.renderer.createText('Holaaa');

    //this.renderer.appendChild(div, text);
    //this.renderer.appendChild(input1, text);
    this.renderer.appendChild(th, input1);
    this.renderer.appendChild(th, input2);
    this.renderer.appendChild(tr, th);


    //this.renderer.appendChild(this.el.nativeElement, div)
    this.renderer.appendChild(this.el.nativeElement, tr);
  
  }
}
