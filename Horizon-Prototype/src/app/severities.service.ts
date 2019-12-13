import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Severity } from 'src/models/severity';

@Injectable({
  providedIn: 'root'
})
export class SeveritiesService {

  backendUrl:string;
  list: Severity[];

  constructor(private http: HttpClient) {
    this.backendUrl = "http://localhost:5000/api/severity";
   }

   getSevereties(): Observable<Severity[]> {
     return this.http.get<Severity[]>(this.backendUrl); 
   }

   getSeverityId(id: number): Observable<Severity> {
     return this.http.get<Severity>(this.backendUrl + "/" + id);
   }

   

  
}
