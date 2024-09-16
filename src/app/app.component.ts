import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { Console } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'API_integrate_project';
  public data:any;
 constructor(private http:HttpClient){}
  
  ngOnInit(): void {
    this.fetchDetails();
  }
  public fetchDetails(){
   this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
    (resp:any) => { 
      //console.log(resp); 
       this.data = resp; 
    }
   )
  }
}
