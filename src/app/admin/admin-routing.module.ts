import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HashulatorComponent} from "../hashulator/hashulator.component";
import {EntranceComponent} from "../entrance/entrance.component";
import {FourOfourComponent} from "../four-ofour/four-ofour.component";

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: "", component: EntranceComponent},
      { path: "hashulator", component: HashulatorComponent},
      { path: "**", component: FourOfourComponent},
    ]
  )],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
