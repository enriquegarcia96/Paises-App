import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); // cuando el usuario deja de escribir

  @Input() placeholder: string = ''; // para ponerlo como props

  debouncer: Subject<string> = new Subject();
  termino: string = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  /**
   * manda los valores al componente de la tabla de paises
   */
  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    /*
     le mando el siguiente valor, cuando se presiona la tecla
     */
    this.debouncer.next(this.termino);
  }
}
