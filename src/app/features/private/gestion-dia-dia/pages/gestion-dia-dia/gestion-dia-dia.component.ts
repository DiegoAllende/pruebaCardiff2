import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-gestion-dia-dia',
  standalone: true,
  imports: [CommonModule, FormsModule, PrimeNgModule],
  templateUrl: './gestion-dia-dia.component.html',
  styleUrls: ['./gestion-dia-dia.component.scss']
})
export class GestionDiaDiaComponent implements OnInit {

  cities: City[] | undefined;
  selectedCity: City | undefined;

  ingredient: string = "";

  ngOnInit() {
    this.cities = [
      { name: '- Seleccione -', code: '0' },
      { name: 'Opción 1', code: '1' },
      { name: 'Opción 2', code: '1' },
      { name: 'Opción 3', code: '1' },
    ];
  }

}
