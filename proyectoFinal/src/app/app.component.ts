import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  :host {
    display:block;
    background:  url(src/assets/imagenes/bbg.jpeg) no-repeat;
    background-size: cover;
    background-position: center;
  
  }

`
],
  
})
export class AppComponent {
  title = 'proyectoFinal';
  
}
