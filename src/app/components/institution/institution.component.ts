import { Component } from '@angular/core';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrl: './institution.component.scss',
})
export class InstitutionComponent {
  institutionItem1: any[] = [
    {
      url: '../../assets/images/institution/institution3.webp',
      description:
        "Музей заснований 14 травня 1918 року рішенням Вінницької міської думи за ініціативи художників В'ячеслава Коренєва та Степана Слободянюка-Подоляна, правника Густава Брілінга та архівіста . Його організацією зайнялось Подільське товариство охорони історичних пам'яток.",
    },
  ];
  institutionItem2: any[] = [
    {
      url: '../../assets/images/institution/institution4.webp',
      description:
        'Упродовж останніх років змінився зовнішній вигляд музею. У 2005-2006 роках відремонтовано фондосховище, проведено реконструкцію фасаду та покрівлі музею, завдяки чому він органічно увійшов в архітектурний ансамбль історичного комплексу "Мури". Внаслідок археологічних та етнографічних експедицій суттєвих змін зазнала і експозиція краєзнавчого музею, значно доповнена унікальними знахідками.',
    },
  ];
}
