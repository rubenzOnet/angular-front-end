import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  peliculasEnCines : any[];
  peliculasProximosEstrenos : any[];

  ngOnInit(): void {
    
    setTimeout(() => {
      this.peliculasEnCines  = [
        {
          titulo : 'Spider-man',
          fechaLanzamiento : new Date(),
          precio : 1458.88
        },
        {
          titulo : 'Moana',
          fechaLanzamiento : new Date('2016-11-14'),
          precio : 300.58
        }
      ];

      this.peliculasProximosEstrenos  = [
        {
          titulo : 'Avengers: EndGame',
          fechaLanzamiento : new Date(),
          precio : 1458.88
        },
        {
          titulo : 'Inception',
          fechaLanzamiento : new Date('2016-11-14'),
          precio : 300.58
        },
        {
          titulo : 'Rocky',
          fechaLanzamiento : new Date('2016-11-14'),
          precio : 300.58
        }
      ];

    }, 500);


  }


}
