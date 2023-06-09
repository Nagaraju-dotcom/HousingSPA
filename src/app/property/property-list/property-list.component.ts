import { Component, OnInit } from '@angular/core';
import { IProperty } from 'src/app/interfaces/iproperty';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty>;

  constructor(private housingService:HousingService) {
    //this.properties=[];
   }  

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      data=>{
        this.properties=data;
         console.log(data)
      },
      error=>{
        console.log(error)
      }      
    );
    /*this.housingService.subscribe(
      data=>{
        this.properties=data;
         console.log(data)
      }
    );*/
  }

}
