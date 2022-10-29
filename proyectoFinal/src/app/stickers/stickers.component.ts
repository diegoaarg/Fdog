import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit, OnDestroy{
  stickers: any[] = [];
  subscription: Subscription;
  
  

  constructor(private ServicioService: ServicioService) { }

  ngOnInit(): void {
    this.ServicioService.getTrendingStickers();
    this.subscription = this.ServicioService.getStickers()
    .subscribe((response: any) => {
      this.stickers = response;
      
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
      
  }
  

}
