import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
selector: 'app-root',
standalone: true,
imports: [CommonModule, ColaboradoresComponent, HttpClientModule,FormsModule],
templateUrl: './app.html',
styleUrls: ['./app.css'] 
})
export class App {
protected readonly title = signal('nom-wa-datosempleado-fe');
}