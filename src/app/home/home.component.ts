import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  items: any[] = [
    {
      url: '../../assets/images/home/tram1.png',
      description:
        'Тут завжди людно: допитливі туристи, дзвіночки трамваїв … і чимало затишних кав’ярень. Городяни часто прогулюються надвечір’ям, коли запалюються ліхтарі.',
      description2:
        'Та чи завжди так було? За понад століття вулиці довелося змінити шість назв. З приходом нової влади – перейменувався й центр міста.',
    },
  ];

  historyItems: any[] = [
    {
      url: '../../assets/images/home/names.png',
      description:
        'Її називали Великою, Поштовою, Миколаївським проспектом, Українським проспектом (окупація 1941–1944 рр.), Леніна і нашершті – Соборною.',
    },
    {
      url: '../../assets/images/home/house.png',
      description:
        'Великий внесок у створення сучасного вигляду вулиці на початку XX століття зробив архітектор Григорій Артинов. Зокрема результатами його творчості стали такі споруди: школа №2 ( Вінницька жіноча гімназія), театр ім. Садовського, Вінницька торгово-промислова палата (колишній будинок міської Думи), магазин «Лікарські рослини» (будинок Райхера), готель «Савой».',
    },
    {
      url: '../../assets/images/home/tram.png',
      description:
        '28 жовтня 1913 року було відкрито рух трамваю по вулиці Соборній. Маршрут починався на залізничному вокзалі і закінчувався жіночою гімназією.',
    },
    {
      url: '../../assets/images/home/rada.png',
      description:
        'Вулиця проходить правим берегом зі сходу на захід від Центрального мосту до Калічанської площі (колишньої площі Гагаріна). На сході вулиця Соборна продовжується , на заході вулицями Пирогова та Хмельницьке Шосе. Вулиця проходить історичним центром міста, як він склався від другої половини XIX століття. ',
    },
    {
      url: '../../assets/images/home/ma-office.png',
      description:
        'Довжина приблизно 1,6 км. Частина вулиці має покриття бруківкою — від перехрестя з вулицею Миколи Оводова до перехрестя з , інша частина покрита асфальтом.',
    },
  ];
  // slides: any[] = [
  //   {
  //     url: '../../assets/images/soborna1.png',
  //     title: 'First slide label',
  //     description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  //   },
  //   {
  //     url: '../../assets/images/soborna2.png',
  //     title: 'Second slide label',
  //     description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  //   },
  //   {
  //     url: '../../assets/images/soborna3.png',
  //     title: 'Third slide label',
  //     description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  //   }
  // ];
}
