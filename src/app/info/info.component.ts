import { Component, Input, OnInit } from '@angular/core';

export interface IInfo {
  title: string;      // заголовок
  image: string;      // картинка
  followers: number;  // всего воспользовались услугой
  following: number;  // заказали услугу
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
// export class InfoComponent implements OnInit {
export class InfoComponent {
  @Input() title: string;
  @Input() image: string;
  @Input() followers: number; 
  @Input() following: number;   
 
  constructor () {}

}
