import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
  
  
})
export class GifComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription: Subscription;
  
  constructor(private ServicioService:ServicioService) { }

  ngOnInit(): void {
    this.ServicioService.getTrendingGifs();
    this.subscription = this.ServicioService.getGifs()
    .subscribe((response: any) =>{
      this.gifs = response;

    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
