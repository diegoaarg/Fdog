import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ServicioService {
  gifs =  new BehaviorSubject<any>([]);
  stickers = new BehaviorSubject<any>([]);
  

  constructor(private http: HttpClient) { }

  getTrendingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=nqC7NLYdWSoU9tG5d76WyfVRUgHyDYk4&limit=32&rating=g`)
    .subscribe((Response: any)=> {
      this.gifs.next(Response.data);
    });
    
  }
  searchGifs(gifName: string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=nqC7NLYdWSoU9tG5d76WyfVRUgHyDYk4&limit=32&rating=g`)
    .subscribe((Response: any)=> {
      this.gifs.next(Response.data);
    });
  }

  getGifs(){
    return this.gifs.asObservable();
  }

  getTrendingStickers(){
    return this.http.get(`https://api.giphy.com/v1/stickers/trending?api_key=nqC7NLYdWSoU9tG5d76WyfVRUgHyDYk4&limit=32&rating=g`)
    .subscribe((Response: any)=> {
      this.stickers.next(Response.data);
    });

  }

  searchStickers(stickerName: string){
    return this.http.get(`https://api.giphy.com/v1/stickers/search?q=${stickerName}&api_key=nqC7NLYdWSoU9tG5d76WyfVRUgHyDYk4&limit=32&rating=g`)
    .subscribe((Response: any)=> {
    this.stickers.next(Response.data);
    });
  }

  getStickers(){
    return this.stickers.asObservable();
  }
  
  
  

  
}


