import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    RouterModule
  ]
})
export class SharedModule { }
