import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
})
export class PhotoComponent {
  photos1 = [
    {url: '../../assets/images/photo/photo1.png'},
    {url: '../../assets/images/photo/photo2.png'},
    {url: '../../assets/images/photo/photo3.png'},
    {url: '../../assets/images/photo/photo4.png'},
    {url: '../../assets/images/photo/photo5.png'},
  ];

  photos2 = [
    {url: '../../assets/images/photo/photo6.png'},
    {url: '../../assets/images/photo/photo7.png'},
    {url: '../../assets/images/photo/photo8.png'},
    {url: '../../assets/images/photo/photo9.png'},
    {url: '../../assets/images/photo/photo10.png'},
  ];
}
