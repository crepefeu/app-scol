import { Component } from '@angular/core';
import { Specialite } from 'src/app/models/class/specialite';
import { SpecService } from 'src/app/services/spec.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent {

  tableauSpecs?: Specialite[];

  constructor(private specsService: SpecService) {}

  ngOnInit(): void {
    this.tableauSpecs = this.specsService.specs;
  }

}
