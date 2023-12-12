import { Injectable } from '@angular/core';
import { Specialite } from '../models/class/specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecService {

  public specs = [
    new Specialite('Informatique', 1),
    new Specialite('Mathematique', 2),
    new Specialite('Physique', 3),
    new Specialite('Chimie', 4),
    new Specialite('Biologie', 5),
    new Specialite('Geologie', 6),
  ]

  constructor() { }
}
