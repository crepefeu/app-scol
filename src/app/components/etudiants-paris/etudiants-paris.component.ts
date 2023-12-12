import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/class/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiants-paris',
  templateUrl: './etudiants-paris.component.html',
  styleUrls: ['./etudiants-paris.component.scss']
})
export class EtudiantsParisComponent implements OnInit{

  tableauEtudiantsParis?: Etudiant[];

  constructor(private etudiantService: EtudiantService){}

  ngOnInit(): void {
    this.tableauEtudiantsParis = this.etudiantService.etudiants.filter(etudiant => etudiant._ville == "Paris");
  }
}
