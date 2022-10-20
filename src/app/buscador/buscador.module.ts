import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    BusquedaComponent
  ]
})
export class BuscadorModule { }
