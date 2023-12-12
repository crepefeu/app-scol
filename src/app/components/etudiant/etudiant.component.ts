import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from './../../models/class/etudiant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit{

  tableauEtudiants?: Etudiant[];

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.tableauEtudiants = this.etudiantService.etudiants;
  }
}
