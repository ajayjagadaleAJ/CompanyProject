import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {
 ck:Company[]=[];
 
 constructor(private cs: CompanyService){}

ngOnInit(): void {
    this.disp();
}



  public disp()
  {
    this.cs.two().subscribe(data =>{this.ck=data});
  }

  public del(cid:number)
  {
    this.cs.three(cid).subscribe();
   return  this.disp();
  }

  public edit(cid:number)
  {
    this.cs.four(cid).subscribe();
  }

}
