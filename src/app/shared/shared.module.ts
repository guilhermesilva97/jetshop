import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputComponent } from './components/input/input.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { InputCurrencyComponent } from './components/input-currency/input-currency.component';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import {  MatDialogModule } from '@angular/material/dialog';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';

@NgModule({
  declarations: [
    InputNumberComponent,
    InputComponent,
    InputSearchComponent,
    InputCurrencyComponent,
    DialogConfirmComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule,
    MatSlideToggleModule,
    CurrencyMaskModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports: [
    MatIconModule,
    MatFormFieldModule,
    InputNumberComponent,
    InputComponent,
    InputSearchComponent,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule,
    MatSlideToggleModule,
    CurrencyMaskModule,
    InputCurrencyComponent,
    FormsModule,
    MatSnackBarModule,
    DialogConfirmComponent,
    MatDialogModule
  ]
})
export class SharedModule { }
