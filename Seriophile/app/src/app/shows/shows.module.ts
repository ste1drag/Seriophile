import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShowsRoutingModule } from "./shows-routing.module";
import { ShowsComponent } from "./shows.component";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
  declarations:[
    ShowsComponent
  ],
  imports: [
    CommonModule,
    ShowsRoutingModule,
    MatCardModule,
    MatGridListModule
  ]
})

export class ShowsModule { }

