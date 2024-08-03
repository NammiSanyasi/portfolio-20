import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  products:any[]=[]
  constructor(private ds: DataService) {
   this.ds.getData().subscribe((data:any)=>this.products=data)
}
}