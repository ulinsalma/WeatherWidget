import { Component } from '@angular/core';
import { ITemperature } from './temperature/temperature.component';
import  { IInfo }  from  './info/info.component';

// инфо по объекту
interface IObject {
  name: string;     // название (отеля, тура, турбазы, ..)
  addr1: string;    // первая срока в адресе
  addr2: string;    // вторая строка
  tel: string;      // номер телефона
  image1: string;   // картинка 1
  image2: string;   // картинка 2
}

// услуга
interface IService {
  id: string;       // код услуги
  href: string;     // ссылка
  name: string;     // название ссылки
  header?: string;  // заголовок над инфо
  info: IObject[];  // информация по объектам услуги
}
// данные по услугам
let services: IService[] = [
  {id:'hotel', href:'#', name:'Hotel', header:'Отели',
    info:[
      {name: 'Хороший отель', addr1: 'Солнечная улица', addr2: 'дом 17 корпус 1', tel: '+1285 968 685', image1: 'images/50/h1.jpg', image2:'images/50/h2.jpg'},
      {name: 'Курорт у моря', addr1: 'Зелёная долина', addr2: '', tel: '+9991 999 123', image1: 'images/50/h3.jpg', image2:'images/50/h4.jpg'},
      {name: 'Отель 5 звёзд', addr1: 'Золотой песок', addr2: '', tel: '+1285 987 685', image1: 'images/res.jpg', image2:'images/r1.jpg'},
    ]
  },
  {id:'fishing' ,href:'#', name:'Fishing', header:'Рыбалка',
    info: [
      {name: 'Турбаза 5*', addr1: 'Горный проезд', addr2: '', tel: '+1285 968 685', image1: 'images/50/f1.jpg', image2:'images/50/f2.jpg'},
      {name: 'Рыбалка в заполярье', addr1: 'Ловозеро', addr2: '', tel: '+9991 999 123', image1: 'images/50/f3.jpg', image2:'images/50/f4.jpg'},
    ]
  },
  {id:'tour', href:'#', name:'Tours', header:'Туры',
    info: [
      {name: 'Затерянный мир', addr1: 'Сейдозеро', addr2: '2 дня', tel: '+1285 968 685', image1: 'images/50/t1.jpg', image2:'images/50/t2.jpg'},
      {name: 'Ловозёрские олени', addr1: 'турбаза ЮС', addr2: 'причал', tel: '+1285 987 685', image1: 'images/50/t3.jpg', image2:'images/50/t4.jpg'},
    ]
  },
  {id:'weather', href:'#', name:'Weather', header:'Погода',
    info: [
      {name: 'Весна ..', addr1: 'Солнечные дни', addr2: '', tel: '+1285 968 685', image1: 'images/50/w1.jpg', image2:'images/50/w2.jpg'},
      {name: 'Скоро лето', addr1: 'Зелёный рай.', addr2: '', tel: '+9991 999 123', image1: 'images/50/w3.jpg', image2:'images/50/w4.jpg'},
    ]
  },
]

function randomInteger(min:number, max:number):number {
  // возвращает случайное число в диапазоне min-max, включая min и max
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

// подвал
interface IFooter {
  copyright: string;
  href: string;
  name: string;
}
let footer: IFooter = {copyright:'© 2015 Hot Weather Widget. All rights reserved | Design by ', 
  href:'http://w3layouts.com/', name:'W3layouts'};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Hot Weather Widget';  // название виджета
  imageMain:string = 'images/1.jpg';    // основная картинка
  services: IService[] = services;      // услуги
  headerServices: string = this.getHeader(services[0].id);        // заголовок над услугами
  infoOnService: IObject[] = this.getObject(services[0].id);      // инфо по объектам текущей услуги
  temp: ITemperature = this.getTemp(this.infoOnService[0].name);  // температура на объекте
  info: IInfo = this.getInfo(this.infoOnService[0].name);         // инфо по объекту
  footer: IFooter = footer;                                       // подвал
  
  goLink (id:string):void {
    // сменили сервис (отели, туры, ..) - нужно заменить инфо по сервису
    console.log(id);
    this.infoOnService = this.getObject(id);
    this.headerServices = this.getHeader(id);
    this.temp = this.getTemp(this.infoOnService[0].name);
    this.info = this.getInfo(this.infoOnService[0].name);
  }

  goLinkObj (ob:string):void {
    // сменили объект (отель, тур, ..) - нужно заменить инфо по объекту
    console.log(ob);
    this.temp = this.getTemp(ob);
    this.info = this.getInfo(ob);
  }

  getObject(id:string):IObject[] {
    // возвращает инфо по объекту
    for (let a of this.services) {
      if (a.id === id) {
        return a.info;
      }
    }
  }

  getHeader(id:string):string {
    // возвращает заголовок услуги
    for (let a of this.services) {
      if (a.id === id) {
        return a.header;
      }
    }
  }
  
  getTemp(obName:string):ITemperature {
    // возвращает температуру на объекте
    let air = randomInteger(5, 50);
    let water = randomInteger(air, 30);
    let title = (air <= 15 ) ? 'Прохладно' : 'Тепло';
    return {title:title, air:air, water: water};
  }

  getInfo(obName:string):IInfo {
    // возвращает доп. инфо про объект 
    let followers = randomInteger(1000, 5000);
    let following = randomInteger(followers/20, followers/10);
    let images = [
      {img:'h1.jpg', title:'Всё включено'},
      {img:'h2.jpg', title:'Шведский стол'},
      {img:'h3.jpg', title:'Бесплатный WiFi'},
      {img:'h4.jpg', title:'Всё что нужно'},
      {img:'f1.jpg', title:'Хорошая Рыбалка'},
      {img:'f2.jpg', title:'Отдых с детьми'},
      {img:'f3.jpg', title:'Тихое место'},
      {img:'t1.jpg', title:'Заповедный край'},
      {img:'t2.jpg', title:'Вдали от дорог'},
      {img:'t3.jpg', title:'Отдых на 100%'},      
    ]
    let n = randomInteger(0, images.length-1);
    let image = 'images/100/' + images[n].img;
    let title = images[n].title;
    console.log(image);
    return {title:title, followers:followers, following:following, image:image};    
  }
}
