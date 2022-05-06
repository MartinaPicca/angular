import { Component, OnInit } from '@angular/core';
import { Aula } from '../models/aule';
import { AulaDataService } from './aula-data.service';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {



  aule: Aula[] = [];

  constructor(private aulaService: AulaDataService) { }

  ngOnInit(): void {
    this.aulaService.getAule().subscribe(
      response => {
        console.log('test');
        this.aule = response;
        console.log(this.aule.length);
       
      },
      error => {
        console.log(error);
      }
    )
  }


}
