import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bitcoin';
  disclimer:string;
  jsonData:any;
  stringObject: any;
  CurrencyUpdatedate:any;
  constructor(private api:GetApiService){

  }
  ngOnInit()
  {
    this.api.apiCall().subscribe((data)=>{
      console.log("api bit coin data",data);
   
      this.title=data['chartName'];
      this.disclimer=data['disclaimer'];
      this.CurrencyUpdatedate=data['time']['updated'];
      this.jsonData=JSON.stringify(data['bpi']);
      var data1 = [];
      data1.push(data['bpi']['USD']);
      data1.push(data['bpi']['EUR']);
      data1.push(data['bpi']['GBP']);
      
      this.stringObject = JSON.parse(JSON.stringify(data1));
      console.log("JSON object -", this.stringObject);
    
    })
  }
}
