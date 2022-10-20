import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Universidad } from '../interfaces/uni.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorServiceService {

  private urlBase:string='http://universities.hipolabs.com'
  constructor(private http:HttpClient) { }


  getUniPorPais(pais:string,name:string): Observable<Universidad[]>{
    const url:string=`${this.urlBase}/search?country=${pais}&name=${name}`
    return this.http.get<Universidad[]>(url)
  }
}
