import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { AppComponent } from './app.component';
import {MainComponent} from "./main/main.component";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzMenuModule} from "ng-zorro-antd/menu";
import { EntranceComponent } from './entrance/entrance.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EntranceComponent
  ],
  imports: [
    NzButtonModule,
    NzLayoutModule,
    BrowserModule,
    NzBreadCrumbModule,
    NzMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
