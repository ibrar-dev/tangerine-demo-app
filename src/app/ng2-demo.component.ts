import { Component, OnInit, Inject } from '@angular/core';
import { PHONE_SERVICE } from "./phone.service";

@Component({
  selector: 'ng10-demo',
  template: `
   Angular 10 Home Page 
  `
})
export class Ng2DemoComponent implements OnInit {

  phones: any[] = [];

  constructor(
   ) {
    }

    ngOnInit() {
    }

}
