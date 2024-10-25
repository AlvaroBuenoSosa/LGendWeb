import { Component, OnInit } from '@angular/core';
import { SkinsService } from '../../shared/services/skins.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skins',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss']
})
export class SkinsComponent implements OnInit {

  skins: any[] = [];  // Inicializado como un array vacío para almacenar varias skins
  error: string | null = null;  // Para manejar errores

  constructor(private skinsService: SkinsService) {}

  ngOnInit(): void {
    // Obtener el precio de la skin Desert Eagle | Golden Koi
    this.skinsService.getSkinGoldenKoi().subscribe({
      next: (data) => {
        if (data.lowest_price) {  // Verifica que la respuesta contenga datos válidos
          this.skins.push({ // Agregar la skin al array `skins`
            name: data.name,  // Nombre de la skin
            lowest_price: data.lowest_price || 'Precio no disponible',
            median_price: data.median_price || 'Precio no disponible',
            image: data.image  // Imagen de la skin
          });
          this.error = null; // Resetear el error si la solicitud es exitosa
        } else {
          this.error = 'No se pudo obtener el precio de la skin Golden Koi.'; // Manejo de error si no se obtienen datos
        }
      },
      error: (err) => {
        this.error = 'Error al obtener los datos: ' + err.message; // Manejo de error de solicitud
      }
    });

    // Obtener el precio de la skin M4A1-S | Hot Rod
    this.skinsService.getSkinHotRod().subscribe({
      next: (data) => {
        if (data.lowest_price) {  // Verifica que la respuesta contenga datos válidos
          this.skins.push({  // Agregar la skin al array `skins`
            name: data.name,  // Nombre de la skin
            lowest_price: data.lowest_price || 'Precio no disponible',
            median_price: data.median_price || 'Precio no disponible',
            image: data.image  // Imagen de la skin
          });
          this.error = null; // Resetear el error si la solicitud es exitosa
        } else {
          this.error = 'No se pudo obtener el precio de la skin Hot Rod.'; // Manejo de error si no se obtienen datos
        }
      },
      error: (err) => {
        this.error = 'Error al obtener los datos: ' + err.message; // Manejo de error de solicitud
      }
    });

    // Obtener el precio de la skin M4A1-S | Player Two
    this.skinsService.getSkinPlayerTwo().subscribe({
      next: (data) => {
        if (data.lowest_price) {  // Verifica que la respuesta contenga datos válidos
          this.skins.push({  // Agregar la skin al array `skins`
            name: data.name,  // Nombre de la skin
            lowest_price: data.lowest_price || 'Precio no disponible',
            median_price: data.median_price || 'Precio no disponible',
            image: data.image  // Imagen de la skin
          });
          this.error = null; // Resetear el error si la solicitud es exitosa
        } else {
          this.error = 'No se pudo obtener el precio de la skin Hot Rod.'; // Manejo de error si no se obtienen datos
        }
      },
      error: (err) => {
        this.error = 'Error al obtener los datos: ' + err.message; // Manejo de error de solicitud
      }
    });

        // Obtener el precio de la skin M4A1-S | PrintStream
        this.skinsService.getSkinPrintStream().subscribe({
          next: (data) => {
            if (data.lowest_price) {  // Verifica que la respuesta contenga datos válidos
              this.skins.push({  // Agregar la skin al array `skins`
                name: data.name,  // Nombre de la skin
                lowest_price: data.lowest_price || 'Precio no disponible',
                median_price: data.median_price || 'Precio no disponible',
                image: data.image  // Imagen de la skin
              });
              this.error = null; // Resetear el error si la solicitud es exitosa
            } else {
              this.error = 'No se pudo obtener el precio de la skin Hot Rod.'; // Manejo de error si no se obtienen datos
            }
          },
          error: (err) => {
            this.error = 'Error al obtener los datos: ' + err.message; // Manejo de error de solicitud
          }
        });

  }

  
}



