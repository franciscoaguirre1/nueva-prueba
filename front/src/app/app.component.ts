import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  postulantes: any = [] 

  constructor(private api: ApiService ) {
  }


  ngOnInit(): void {  


    this.api.leerPostulantes().then((res:any) => {
      if (res.resMsg == "OK") {
        this.postulantes = res.data.slice(0, 10)
        console.log(this.postulantes);
      } else {
        alert("error en la consulta")      
      }
    })     
    
  }


  leerTablaPostulantes() {
    this.api.leerPostulantes().then((res:any) => {
      if (res.resMsg == "OK") {
        this.postulantes = res.data.slice(0, 20)
        console.log(this.postulantes);
      } else {
        alert(res.resMsg)
      }
    }) 

  }



}
