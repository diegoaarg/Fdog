import { Component, Input, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  
  

  constructor(private servicioService: ServicioService ) { }

  ngOnInit(): void {
  }

  search(searchTerm: string){
    if (searchTerm != ""){
      this.servicioService.searchGifs(searchTerm);
      this.servicioService.searchStickers(searchTerm);
      
      
      
      
      
      
    }
  }
  

}
