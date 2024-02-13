import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityTemp } from '../CityTemp'

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css'],
  imports: [ CommonModule ],
  standalone: true
})
export class NotificaComponent implements OnInit {
  @Input() selezione: CityTemp;
  constructor() { }

  ngOnInit() {
  }

  clean() {
    this.selezione = undefined;
  }

}