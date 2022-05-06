import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aula } from '../models/aule';

@Injectable({
  providedIn: 'root'
})
export class AulaDataService {

  

  constructor(private httpClient:HttpClient) { }



  getAule() {
    return this.httpClient.get<Aula[]>(`http://localhost:8083/api/rest`);  
  }



}
