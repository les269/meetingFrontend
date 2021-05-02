import { PrimeShareModule } from './prime-share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialSharedModule } from './angular-material-shared.module';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialSharedModule,
    PrimeShareModule
  ]
})
export class SharedMaterialModule { }
