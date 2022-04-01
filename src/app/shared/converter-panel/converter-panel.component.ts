import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss'],
})
export class ConverterPanelComponent implements OnInit {
  @Input()
  isHome!: boolean;
  converterForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  // initializing Converter Form
  initForm(): void {
    this.converterForm = new FormGroup({
      amount: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      from: new FormControl('', Validators.required),
    });
  }
}
