import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores';
import { HttpClientModule } from '@angular/common/http';

@Component({
selector: 'app-root',
standalone: true,
imports: [CommonModule, ColaboradoresComponent, HttpClientModule],
templateUrl: './app.html',
styleUrls: ['./app.css'] // ✅ corregido (styleUrl → styleUrls)
})
export class App {
protected readonly title = signal('nom-wa-datosempleado-fe');
}