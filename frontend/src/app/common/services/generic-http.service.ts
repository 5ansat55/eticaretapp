import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {
  api:string = "http://localhost:5000/api";

  constructor(private _http:HttpClient,private _toastr:ToastrService, private _spinner:NgxSpinnerService) {

   }
  //  get<T>(api:string,model:T,callback:(res:T)=>void){
  //   this._spinner.show();
  //   this._http.get<T>(`${this.api}/${api}`).subscribe({
  //     next:(res:T)=>{
  //       callback(res)
  //       this._spinner.hide();
  //     },
  //     error:(err:HttpErrorResponse)=>{
  //       console.log(err);
  //       this._toastr.error(err.error.message)
  //       this._spinner.hide();
  //     }
  //   });
  //  };

     get<T>(api:string,callback:(res:T)=>void){
    this._spinner.show();
    this._http.get<T>(`${this.api}/${api}`).subscribe({
      next:(res:T)=>{
        callback(res)
        this._spinner.hide();
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this._toastr.error(err.error.message)
        this._spinner.hide();
      }
    });
   };

   post<T>(api:string,model:any,callback:(res:T)=>void){
    this._spinner.show();
    this._http.post<T>(`${this.api}/${api}`,model,{}).subscribe({
      next:(res:T)=>{
        callback(res)
        this._spinner.hide();
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this._toastr.error(err.error.message)
        this._spinner.hide();
      }
    });
   };
}
