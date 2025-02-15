import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormularioProductoComponent } from './tienda/componente/formulario-producto/formulario-producto.component';
import { FormularioAgregarComponent } from './tienda/page/formularios/formulario-agregar/formulario-agregar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TiendaMascotaApp';
}
