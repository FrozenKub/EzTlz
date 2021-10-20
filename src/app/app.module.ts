import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { AppComponent } from './app.component';
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzMenuModule} from "ng-zorro-antd/menu";
import { EntranceComponent } from './entrance/entrance.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import {AdminModule} from "./admin/admin.module";
import { HashulatorComponent } from './hashulator/hashulator.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzRadioModule} from "ng-zorro-antd/radio"; // CLI imports

@NgModule({
  declarations: [
    AppComponent,
    EntranceComponent,
    HashulatorComponent,
  ],
  imports: [
    NzButtonModule,
    NzLayoutModule,
    BrowserModule,
    NzBreadCrumbModule,
    NzMenuModule,
    AdminRoutingModule,
    AdminModule,
    NzInputModule,
    FormsModule,
    NzSelectModule,
    NzRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
