import { Component, Input, OnInit } from '@angular/core';

// температура
export interface ITemperature {
  title: string;    // заголовок
  air: number;      // температура воздуха
  water: number;    // температру воды
}

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
//export class TemperatureComponent implements OnInit {
export class TemperatureComponent {
  @Input() title: string;
  @Input() air: number;
  @Input() water: number;

  //constructor() { }

}
