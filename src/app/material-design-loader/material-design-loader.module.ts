import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdCardModule
  ],
  exports: [
    MdToolbarModule,
    MdCardModule
  ],
  declarations: []
})
export class MaterialDesignLoaderModule { }
