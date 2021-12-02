import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HashulatorComponent} from "../hashulator/hashulator.component";
import {TxtToPngComponent} from "../txt-to-png/txt-to-png.component";
import {EntranceComponent} from "../entrance/entrance.component";
import {FourOfourComponent} from "../four-ofour/four-ofour.component";

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: "", component: EntranceComponent},
      { path: "hashulator", component: HashulatorComponent},
      { path: "textmage", component: TxtToPngComponent},
      { path: "**", component: FourOfourComponent},
    ]
  )],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
