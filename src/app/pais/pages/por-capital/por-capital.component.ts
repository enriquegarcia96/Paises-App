import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  capitales: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe({
      next: (capitales) => (this.capitales = capitales),
      error: (error) => (
        (this.hayError = true), (this.capitales = []), console.log(error)
      ),
    });
  }
}
