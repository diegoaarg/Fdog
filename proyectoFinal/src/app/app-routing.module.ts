import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GifComponent } from './gif/gif.component';
import { HomeComponent } from './home/home.component';
import { StickersComponent } from './stickers/stickers.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"Gif",component:GifComponent},
  {path:"Stickers",component:StickersComponent},
  {path:"About",component:AboutComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
