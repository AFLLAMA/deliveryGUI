import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../model/company';
import { Catalogue } from '../model/catalogue';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  @Input() message: Catalogue;
  companies: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    // this.companyService.getCompanies().subscribe(data => {
    //   this.companies = data;
    // });
  }

}
