import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Colaborador {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  direccion: string;
  profesion: string;
  estado_civil: string;
}

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colaboradores.html',
  styleUrl: './colaboradores.css'
})
export class Colaboradores {
  colaboradores: Colaborador[] = [];
  cargando = false;

  cargarColaboradores() {
    this.cargando = true;

    setTimeout(() => {
      this.colaboradores = [
        {
          id: 1,
          nombre: 'Ana',
          apellido: 'Gómez',
          edad: 24,
          direccion: 'Zona 1',
          profesion: 'Ingeniera',
          estado_civil: 'Soltera'
        },
        {
          id: 2,
          nombre: 'Luis',
          apellido: 'Pérez',
          edad: 45,
          direccion: 'Zona 7',
          profesion: 'Arquitecto',
          estado_civil: 'Casado'
        }
      ];
      this.cargando = false;
    }, 1000);
  }

  nivelRiesgo(edad: number): string {
    if (edad >= 18 && edad <= 25) return '🟢 FUERA DE PELIGRO';
if (edad >= 26 && edad <= 50) return '🟠 TENGA CUIDADO';
return '🔴 POR FAVOR QUEDARSE EN CASA';
}

mostrarAlerta(mensaje: string) {
alert(mensaje);
}
}