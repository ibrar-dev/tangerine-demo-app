import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { Ng2DemoComponent } from "./ng2-demo.component";
import { RouterModule, UrlHandlingStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { phoneServiceProvider } from './phone.service';
declare var angular: any;

export class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return url.toString().startsWith("/angular") || url.toString() == "/"
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}
``
angular.module('phonecatApp')
  .directive(
    'ng2Demo',
    downgradeComponent({component: Ng2DemoComponent})
  );
@NgModule({
  declarations: [
    AppComponent,
    Ng2DemoComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'angular'
      },
      {
        path: 'angular',
        component: Ng2DemoComponent
      }
    ],
    {
      // useHash: true,
      // enableTracing: true
    }
    )
  ],
  providers: [
    
    phoneServiceProvider,
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
