import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Universidad } from '../interfaces/uni.interface';
import { BuscadorServiceService } from '../services/buscador-service.service';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  
  constructor(private buscadorService: BuscadorServiceService) { }
  
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() universidades:Universidad[]=[];

  paises:string[]=['Spain','Portugal','United Kingdom']
  paisSeleccionado:string='Spain';
  paisAnterior:string=''
  termino:string = '';
  debouncer: Subject<string> = new Subject();
  nombre: string[]=[]
  country: string[]=[]
  
  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor=> {
      this.onDebounce.emit(valor);
    })
    
  }
  cambiarPais(pais:string){
    this.paisSeleccionado=pais
    this.termino=''
  }
  presionaTecla(){
    this.debouncer.next(this.termino)
    this.sugerencias(this.termino)
  }
  sugerencias(termino:string){
    this.termino=termino;
    if(termino===''){
      this.universidades=[];
    }
    this.buscadorService.getUniPorPais(this.paisSeleccionado, termino)
      .subscribe(unis=>{
        this.universidades=unis;
      })
  }

  
}
