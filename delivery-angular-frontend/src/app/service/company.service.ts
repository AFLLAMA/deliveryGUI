import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../model/company';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyUrl: string;

  constructor(private http: HttpClient) {
    // this.companyUrl = 'http://localhost:8080/companies';
  }
  // public getCompanies(): Observable<Company[]>{
  //   return this.http.get<Company[]>(this.companyUrl);
  // }
}
