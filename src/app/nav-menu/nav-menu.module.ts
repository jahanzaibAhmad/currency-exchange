import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavMenuRoutingModule } from './nav-menu-routing.module';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    NavMenuRoutingModule
  ]
})
export class NavMenuModule { }
