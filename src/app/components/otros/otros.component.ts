import { Component, OnInit } from '@angular/core';
import { OtrosService } from '../../shared/services/otros.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.scss']
})
export class OtrosComponent implements OnInit {
  product1: any;  // Almacenará los detalles del primer producto
  product2: any;  // Almacenará los detalles del segundo producto
  error: string | null = null;

  constructor(private otrosService: OtrosService) {}

  ngOnInit(): void {
    const asinAMDRYZEN73800X = 'B0BTZB7F88'; // ASIN del primer producto
    const asinAMDRYZEN9 = 'B0BTRH9MNS'; // ASIN del segundo producto
    this.loadProductDetails(asinAMDRYZEN73800X, 'product1'); // Carga el primer producto
    this.loadProductDetails(asinAMDRYZEN9, 'product2'); // Carga el segundo producto
  }

  loadProductDetails(asin: string, product: string) {
    this.otrosService.getProductDetailsRyzen7800x(asin).subscribe({
      next: (data) => {
        console.log('Respuesta de la API:', data); // Agrega esto para ver cómo es la respuesta
        if (product === 'product1') {
          this.product1 = data;
        } else if (product === 'product2') {
          this.product2 = data;
        }
      },
      error: (err) => {
        this.error = 'Error al obtener los datos: ' + err.message;
        console.error('Error fetching product details:', err);
      }
    });
  }
}




