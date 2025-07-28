import { Component, signal } from '@angular/core';
import { Colaboradores } from "./components/colaboradores/colaboradores";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ CommonModule,Colaboradores],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nom-wa-datosempleado-fe');
}
