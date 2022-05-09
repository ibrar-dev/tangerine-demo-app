import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpgradeModule } from "@angular/upgrade/static";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private upgrade: UpgradeModule,
    private router: Router,) { }
  ngOnInit() {
    this.upgrade.bootstrap(document.body, ['phonecatApp']);
  }
  
  title = 'ng10-ng-js';

  moveAngular10() {
    console.log()
    this.router.navigateByUrl('');

  }
}
