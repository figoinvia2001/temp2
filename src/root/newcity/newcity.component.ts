import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-newcity',
  templateUrl: './newcity.component.html',
  styleUrls: ['./newcity.component.css'],
  standalone: true
})
export class NewcityComponent implements OnInit {
  @Output() newCityEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  newCity() {
    var input: HTMLInputElement = document.getElementById("nuovo") as HTMLInputElement;
    var newName = input.value;
    this.newCityEvent.emit(newName);
    input.value='';
    }

}