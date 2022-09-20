import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() keyFormControl: FormControl;
  @Input() placeholder = "";
  @Input() width = '100px';
  
  constructor() { }

  ngOnInit(): void {
  }

}
