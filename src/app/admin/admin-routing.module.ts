import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HashulatorComponent} from "../hashulator/hashulator.component";
import {EntranceComponent} from "../entrance/entrance.component";

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: "", component: EntranceComponent},
      { path: "hashulator", component: HashulatorComponent},
    ]
  )],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
