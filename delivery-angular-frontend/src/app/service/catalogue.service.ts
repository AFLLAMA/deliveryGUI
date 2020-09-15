import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catalogue } from '../model/catalogue';
import { Company } from '../model/company';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable(
  {
  providedIn: 'root'
  }
)
export class CatalogueService {
  private cataloguesUrl: string;

  constructor(private http: HttpClient) {
    this.cataloguesUrl = 'http://localhost:8080/catalogues';
  }
  public getCatalogues(): Observable<Catalogue[]> {
    return this.http.get<Catalogue[]>(this.cataloguesUrl);
  }
}
