import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.css']
})
export class InputCurrencyComponent implements OnInit {

  @Input() keyFormControl: FormControl;
  @Input() placeholder = "";
  @Input() width = '100px';
  
  constructor() { }

  ngOnInit(): void {
  }

}
