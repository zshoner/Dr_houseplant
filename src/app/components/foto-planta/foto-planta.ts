import { Component, inject, ChangeDetectorRef} from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-foto-planta',
  styleUrl: './foto-planta.css',
  templateUrl: './foto-planta.html',
})
export class FotoPlantaComponent {

  // Inyectamos el ChangeDetectorRef para poder actualizar la vista previa de la imagen
  private actualizador = inject(ChangeDetectorRef);

  //vista previa
  vistaPrevia: string | null = null;

  // Función que captura la imagen 
  capturarImagen(event: Event): void {
    const input = event.target as HTMLInputElement;

    // Verificamos si se seleccionó un archivo o se cancelo 
    if (input.files && input.files[0]) {
      const archivo = input.files[0];

      // Leemos el archivo seleccionado
      const reader = new FileReader();
      
      reader.onload = () => {
        // Asignamos la imagen convertida a nuestra variable
        this.vistaPrevia = reader.result as string;


        // Disparamos la detección de cambios
        this.actualizador.detectChanges();
      };

      // Convertimos la imagen a base64 para poder mostrarla en la vista previa
      reader.readAsDataURL(archivo);
    }
  }
}
