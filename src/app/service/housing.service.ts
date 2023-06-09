import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map } from 'rxjs/operators';
import { IProperty } from '../interfaces/iproperty';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties():Observable<IProperty[]>
  {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray:Array<IProperty>=[];
        for( const id in data){
          if(data.hasOwnProperty(id)){
            type id=any;
            propertiesArray.push(data as any[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
