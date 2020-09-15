import { Component, OnInit } from '@angular/core';
import { Catalogue } from '../model/catalogue';
import { Company } from '../model/company';

import { CatalogueService } from '../service/catalogue.service';

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {

  catalogues: Catalogue[];
  coms: Company[];
  prods: string[];
  constructor(private catalogueService: CatalogueService) { }

  showCatalogue(index){
    this.coms = this.catalogues[index].companies ;
    return this.coms;
  }

  showCompany(index){
    console.log('good');
    console.log(index);
  }

  ngOnInit(): void {
    this.catalogueService.getCatalogues().subscribe(data => {
      this.catalogues = data;
    });
  }

}
