import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  formBuilder: FormBuilder;
  @Input() keyFormControl: FormControl;

  constructor(fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
