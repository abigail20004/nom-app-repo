import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColaboradorService } from '../services/colaborador';
import { Colaborador } from '../services/colaborador';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './colaboradores.html',
  styleUrls: ['./colaboradores.css']
})
export class ColaboradoresComponent {
  colaboradores: Colaborador[] = [];
  cargando = false;

  mostrarFormulario = false;

  nuevoColaborador: Colaborador = {
    idcolaborador: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    edad: 0,
    profesion: '',
    estado_civil: ''
  };

  constructor(private colaboradorService: ColaboradorService) {}

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  cargarColaboradores() {
    this.cargando = true;
    this.colaboradorService.getColaboradores().subscribe({
      next: (data) => {
        this.colaboradores = data;
        this.cargando = false;
      },
      error: () => {
        alert('Error al cargar colaboradores');
        this.cargando = false;
      }
    });
  }

  agregarColaborador() {
    this.colaboradorService.createColaborador(this.nuevoColaborador).subscribe({
      next: () => {
        alert('Colaborador creado exitosamente');
        this.nuevoColaborador = {
          idcolaborador: 0,
          nombre: '',
          apellido: '',
          direccion: '',
          edad: 0,
          profesion: '',
          estado_civil: ''
        };
        this.mostrarFormulario = false;
        this.cargarColaboradores();
      },
      error: () => {
        alert('Error al crear colaborador');
      }
    });
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
