import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  @Input() keyFormControl: FormControl;
  @Input() placeholder = "";
  @Input() width = '100px';
  @Input() step = 1;
  @Input() min = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
