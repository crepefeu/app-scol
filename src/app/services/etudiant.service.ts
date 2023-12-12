import { Etudiant } from './../models/class/etudiant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  public etudiants = [
    new Etudiant('Dupont', 'Jean', '20 rue de la paix', '75000', 'Nantes', 'mail.com', 'M', 20, 1),
    new Etudiant('Dupont', 'Marie', '10 rue de la paix', '75000', 'Paris', 'mail.com', 'M', 20, 2),
    new Etudiant('Leroux', 'Marceau', '2 rue de la paix', '75000', 'Paris', 'mail.com', 'M', 20, 3),
    new Etudiant('Moreau', 'Alexandre', '5 rue de la paix', '75000', 'Paris', 'mail.com', 'M', 20, 4),
    new Etudiant('Gauvin', 'Benoit', '7 rue de la paix', '75000', 'Paris', 'mail.com', 'M', 20, 5),
    new Etudiant('Rodriguez', 'Esteban', '1 rue de la paix', '75000', 'Paris', 'mail.com', 'M', 20, 6),
  ]
  constructor() {}
}
