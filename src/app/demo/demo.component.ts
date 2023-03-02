import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  result:any;
  constructor(private getData:DataService) { }


  ngOnInit(){
    this.getData.getData().subscribe(res=>{
      this.result=res;
    })

}
}
