import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  leerPostulantes() {
    return this.http.get(`${environment.apiUrl}/api/v1/postulantes`).toPromise()  
  }


}
