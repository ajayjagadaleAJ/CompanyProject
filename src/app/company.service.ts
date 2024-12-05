import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from './company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private ht:HttpClient) { }

public one(cc:any)
{
  let url="http://localhost:8080/company/saveCompany";
  console.log("This is service file :Record saved");
  return this.ht.post(url,cc);
}

public two():Observable<Company[]>
{
  let url="http://localhost:8080/company/displayAllCompanies";
  return this.ht.get<Company[]>(url);
}

public three(cid:number)
{
  let url="http://localhost:8080/company/deleteCompany/" + cid;
 return this.ht.delete(url); 
}

public four(cid:number)
{
  let url="http://localhost:8080/company/updateRecord/" + cid;
  return this.ht.get(url);
}



}
