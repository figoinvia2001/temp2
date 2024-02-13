import { Component, OnInit, VERSION } from '@angular/core';
import { CityTemp } from './CityTemp';
import { WeatherService } from './weather.service';
import { CommonModule } from '@angular/common';
import { AjaxResponse } from 'rxjs/ajax';
import { NotificaComponent } from './notifica/notifica.component';
import { NewcityComponent } from './newcity/newcity.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NotificaComponent, NewcityComponent],
  providers: [WeatherService],
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  title: string = 'Temperature in Angular ' + VERSION.major;
  cities: Array<string> = ['Torino','Milano','Genova','Pisa'];
  seleziona(name: string) {
    this.selezione = new CityTemp(name, undefined);
    this.ws.getData(this.selezione.nome).subscribe({
      next: (x: AjaxResponse<any>|undefined) =>
        (this.selezione.valore = x.response.main.temp),
      error: (err) =>
          console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }

  selezione: CityTemp;

  clean() {
  this.selezione = undefined;
  }

  addCity(newCity: string) {
    this.cities.push(newCity);
  }

  constructor(private ws: WeatherService) {}

  ngOnInit() {}
  }