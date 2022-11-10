import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Addbicycles } from './admin/addbicycles/addbicycles';
import { Addcompanies } from './admin/addcompanies/addcompanies';
import { Register } from './register/registerdata';
import { Payment } from './user/userpayment/userpayment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  emailofuser!: string;
  urlregisterpost:string='http://localhost:8090/register/save';
  urlregisterget:string='http://localhost:8090/register/list';
  urlregistergetbymail:string='http://localhost:8090/register/mail';
  urlcompaniespost:string='http://localhost:8090/companies/save';
  urlcompaniesget:string='http://localhost:8090/companies/list';
  urlbicyclepost:string='http://localhost:8090/bicycles/save';
  urlbicycleget:string='http://localhost:8090/bicycles/list';
  urlgetbicyclesbycompanyname:string='http://localhost:8090/bicycles/find';
  urldeletebicycle:string='http://localhost:8090/bicycles/delete';
  urlbicyclegetbymodelname:string='http://localhost:8090/bicycles/modelname';
  urlpaymentpost:string='http://localhost:8090/payment/save';
  urlpaymentgetuser:string='http://localhost:8090/payment/find'
  urlpaymentget:string='http://localhost:8090/payment/list';
  urlputbicycles:string='http://localhost:8090/bicycles/update';
  urlcompanyfind:string='http://localhost:8090/companies/find';
  urldeletecompany:string='http://localhost:8090/companies/delete';
  modelname!: string;
  constructor(private httpClient: HttpClient) { }

  company!:string;
  username!:string;
  count1!:string;
  Paymentdeatails!:Payment
  
  loggin()
  {
    return localStorage.getItem("token");
  }

  loggout()
  {
    localStorage.removeItem("token");
    this.loggin();
  }
  setname(name:string)
  {
     this.username=name;
  }
  setcount(count:string)
  {
     this.count1=count;
  }
  getcount()
  {
    return this.count1;
  }
  getname()
  {
    return this.username;
  }
  setmailofuser(email:string)
  {
    this.emailofuser=email;
  }
  postregistration(body:Register):Observable<Register>
  {
    return this.httpClient.post<Register>(this.urlregisterpost,body)
    .pipe(retry(1), catchError(this.handleError));
  }
 getemailofuser()
 {
  return this.emailofuser;
 }

 setcompanyname(companyname:string)
 {
  this.company=companyname;
 }
getbycompanyname()
{
  return this.company;
}
setuserpayment(paymentdetails:Payment)
{
this.Paymentdeatails=paymentdetails;
}
getuserpaymentnameoncard()
{
  return this.Paymentdeatails.nameoncard;
}

setmodelname(modelname:string)
{
  this.modelname=modelname;
}

getmodelname()
{
  return this.modelname;
}
 getcompanies():Observable<Addcompanies>
 {
  return  this.httpClient.get<Addcompanies>(this.urlcompaniesget).
  pipe(retry(1), catchError(this.handleError));
 }
 postcompanies(body:Addcompanies):Observable<Addcompanies>
 {
  return this.httpClient.post<Addcompanies>(this.urlcompaniespost,body).
  pipe(retry(1), catchError(this.handleError));

 }

 getallcustomersregisterd():Observable<Register>
 {
  return this.httpClient.get<Register>(this.urlregisterget).
  pipe(retry(1), catchError(this.handleError));
 }
 postdetailsofpayment(body:Payment):Observable<Payment>
 {
  return this.httpClient.post<Payment>(this.urlpaymentpost,body).
  pipe(retry(1), catchError(this.handleError));
 }

 postbicycles(body:Addbicycles):Observable<Addbicycles>
 {
    return this.httpClient.post<Addbicycles>(this.urlbicyclepost,body).
  pipe(retry(1), catchError(this.handleError));
 }
getcompanypresent(companyname:string):Observable<boolean>
{
  return this.httpClient.get<boolean>(`${this.urlcompanyfind}/${companyname}`).
  pipe(retry(1), catchError(this.handleError));
}
 getallbicycles():Observable<Addbicycles>
 {
  return  this.httpClient.get<Addbicycles>(this.urlbicycleget).
  pipe(retry(1), catchError(this.handleError));
 }
 getbicyclebymodelname(modelname:string):Observable<Addbicycles>
 {
  return  this.httpClient.get<Addbicycles>(`${this.urlbicyclegetbymodelname}/${modelname}`).
  pipe(retry(1), catchError(this.handleError));
 }
 getallbicyclesbycompanyname(companyname:string):Observable<Addbicycles>
 {
  return  this.httpClient.get<Addbicycles>(`${this.urlgetbicyclesbycompanyname}/${companyname}`).
  pipe(retry(1), catchError(this.handleError));
 }
getpaymentdetails():Observable<Payment>
{
  return  this.httpClient.get<Payment>(this.urlpaymentget).
  pipe(retry(1), catchError(this.handleError));
}

getpaymentdeatailsbynameoncard(nameoncard:string):Observable<Payment>
{
  return  this.httpClient.get<Payment>(`${this.urlpaymentgetuser}/${nameoncard}`).
  pipe(retry(1), catchError(this.handleError));
}
 getuserdetailsbyemail(email:string):Observable<Register>
 {
  return this.httpClient
  .get<Register>(`${this.urlregistergetbymail}/${email}`)
  .pipe(retry(1), catchError(this.handleError));
 }

 putbicycles(modelname:string,element:Addbicycles):Observable<Addbicycles>
 {
  return this.httpClient
  .put<Addbicycles>(`${this.urlputbicycles}/${modelname}`,element)
  .pipe(retry(1), catchError(this.handleError));
 }
 deletecompanyname(companyname:string):Observable<Addcompanies>
 {
  return this.httpClient
  .delete<Addbicycles>(`${this.urldeletecompany}/${companyname}`)
  .pipe(retry(1), catchError(this.handleError));

 }
 deletebicyclemodelname(modelname:string):Observable<Addbicycles>
 {
  return this.httpClient
  .delete<Addbicycles>(`${this.urldeletebicycle}/${modelname}`)
  .pipe(retry(1), catchError(this.handleError));
 }
handleError(err: any) {
    return throwError(() => {
      'something went wrong';
    });
  }

}
