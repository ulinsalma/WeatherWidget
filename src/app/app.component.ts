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
      {name: 'Хороший отель', addr1: 'Солнечная улица', addr2: 'дом 17 корпус 1', tel: '+1285 968 685', image1: 'images/res.jpg', image2:'images/r1.jpg'},
      {name: 'Так-себе отель', addr1: 'Элеваторная ул.', addr2: 'спросить Маню', tel: '+9991 999 123', image1: 'images/res.jpg', image2:'images/r1.jpg'},
      {name: 'Отель 5 звёзд', addr1: 'Золотой проспект', addr2: 'всё вокруг', tel: '+1285 987 685', image1: 'images/res.jpg', image2:'images/r1.jpg'},
    ]
  },
  {id:'fishing' ,href:'#', name:'Fishing', header:'Рыбалка',
    info: [
      {name: 'Турбаза 5*', addr1: 'Горный проезд', addr2: 'коттеджи', tel: '+1285 968 685', image1: 'images/res.jpg', image2:'images/r1.jpg'},
      {name: 'Рыбалка в заполярье', addr1: 'Ловозеро', addr2: 'Юлинская Салма', tel: '+9991 999 123', image1: 'images/res.jpg', image2:'images/r1.jpg'},
      {name: 'Всё о нересте', addr1: 'много и сразу', addr2: 'всё вокруг', tel: '+1285 987 685', image1: 'images/res.jpg', image2:'images/r1.jpg'},
    ]
  },
  {id:'tour', href:'#', name:'Tours', header:'Туры',
    info: [
      {name: 'Затерянный мир', addr1: 'Сейдозеро', addr2: '2 дня', tel: '+1285 968 685', image1: 'images/res.jpg', image2:'images/r1.jpg'},
      {name: 'Верховья Поноя', addr1: 'р.Койнийок', addr2: 'за поворотом', tel: '+9991 999 123', image1: 'images/res.jpg', image2:'images/r1.jpg'},
      {name: 'Ловозёрские олени', addr1: 'турбаза ЮС', addr2: 'причал', tel: '+1285 987 685', image1: 'images/res.jpg', image2:'images/r1.jpg'},
    ]
  },
  {id:'weather', href:'#', name:'Weather', header:'Погода',
    info: [
      {name: 'Хороршая погода', addr1: 'Солнечная улица', addr2: 'дом 17 корпус 1', tel: '+1285 968 685', image1: 'images/res.jpg', image2:'images/r1.jpg'},
      {name: 'Средняя погода', addr1: 'Элеваторная ул.', addr2: 'спросить Маню', tel: '+9991 999 123', image1: 'images/res.jpg', image2:'images/r1.jpg'},
      {name: 'Плохая погода', addr1: 'Золотой проспект', addr2: 'всё вокруг', tel: '+1285 987 685', image1: 'images/res.jpg', image2:'images/r1.jpg'},    
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
    let title = ['Всё включено', 'Шведский стол', 'Бесплатный WiFi', 'Всё что нужно'];
    let images = ['1.jpg', 'b1.jpg', 'r1.jpg', 'res.jpg'];
    let n = randomInteger(0, images.length-1);
    let image = 'images/' + images[n];
    console.log(image);
    return {title:title[n], followers:followers, following:following, image:image};    
  }


}
