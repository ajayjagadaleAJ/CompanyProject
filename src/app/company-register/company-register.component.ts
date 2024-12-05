import { Component } from '@angular/core';
import { Company } from '../company';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-company-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './company-register.component.html',
  styleUrl: './company-register.component.css'
})
export class CompanyRegisterComponent {

  c1 = new Company();

  constructor(private cs : CompanyService){}

  public saveCompanyInfo(cc:Company)
  {
    this.cs.one(cc).subscribe();
    console.log(cc);
    new Company();

  }
  




}
