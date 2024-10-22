import { Component, OnInit } from '@angular/core';
import { SkinsService } from '../../shared/services/skins.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skins',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss'] // Corrección del nombre de la propiedad
})
export class SkinsComponent implements OnInit {
  
  skin: any;  // Aquí almacenaremos los datos del precio
  error: string | null = null;  // Para manejar errores

  constructor(private skinsService: SkinsService) {}

  ngOnInit(): void {
    this.skinsService.getSkinPriceRedline().subscribe({
      next: (data) => {
        this.skin = data;
        this.error = null; // Resetear el error si la solicitud es exitosa
      },
      error: (err) => {
        this.error = 'Error al obtener los datos: ' + err.message; // Manejo de error
      }
    });
  }
}
