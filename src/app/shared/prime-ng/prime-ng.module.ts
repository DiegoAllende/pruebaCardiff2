import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [],
  imports: [
    CalendarModule, DropdownModule, InputTextModule, RadioButtonModule, TabViewModule
  ],
  exports: [
    CalendarModule, DropdownModule, InputTextModule, RadioButtonModule, TabViewModule
  ]
})
export class PrimeNgModule { }
