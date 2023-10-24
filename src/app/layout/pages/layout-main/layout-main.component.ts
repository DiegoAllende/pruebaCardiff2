import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuHeaderComponent } from '../../components/menu-header/menu-header.component';
import { MenuAsideComponent } from '../../components/menu-aside/menu-aside.component';

@Component({
  selector: 'app-layout-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuHeaderComponent, MenuAsideComponent],
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent {

}
