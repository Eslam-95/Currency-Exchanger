import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterPanelComponent } from './converter-panel/converter-panel.component';

@NgModule({
  declarations: [ConverterPanelComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [ConverterPanelComponent],
})
export class SharedModule {}
