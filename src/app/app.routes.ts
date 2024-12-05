import { Routes } from '@angular/router';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { DisplayComponent } from './display/display.component';
import { EditRecordComponent } from './edit-record/edit-record.component';

export const routes: Routes = [

    {path:"CompReg" , component:CompanyRegisterComponent},
    {path:"DisplayCompany", component:DisplayComponent},
    {path:"EditRecord", component:EditRecordComponent}
];
