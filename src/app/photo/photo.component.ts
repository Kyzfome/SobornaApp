import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
})
export class PhotoComponent {
  images = [
    { name: 'Арка', url: 'assets/images/arka.jpg' },
    { name: 'Artwork', url: 'assets/images/Artwork.png' },
    { name: 'City', url: 'assets/images/city.png' },
    { name: 'Do', url: 'assets/images/do.png' },
    { name: 'Forest', url: 'assets/images/forest.png' },
    {
      name: 'Hotel France Vinnystia Exterior',
      url: 'assets/images/Hotel-France-Vinnytsia-Exterior.jpg',
    },
    { name: 'House', url: 'assets/images/house.png' },
    { name: 'Logo', url: 'assets/images/logo.png' },
    { name: 'MA Office', url: 'assets/images/ma-office.png' },
    { name: 'Man', url: 'assets/images/man.png' },
    { name: 'Maxresdefault', url: 'assets/images/maxresdefault.jpg' },
    { name: 'Myr 1', url: 'assets/images/myr_1.png' },
    { name: 'Myr 2', url: 'assets/images/myr_2.png' },
    { name: 'Names', url: 'assets/images/names.png' },
    { name: 'Photo', url: 'assets/images/photo.png' },
    { name: 'Rada', url: 'assets/images/rada.png' },
    { name: 'Soborna 1', url: 'assets/images/soborna1.png' },
    { name: 'Soborna 2', url: 'assets/images/soborna2.png' },
    { name: 'Soborna 3', url: 'assets/images/soborna3.png' },
    { name: 'Tram', url: 'assets/images/tram.png' },
    { name: 'Tram 1', url: 'assets/images/tram1.png' },
    { name: 'Vinnytsia Oblrada', url: 'assets/images/vinnytsia_oblrada.jpg' },
    { name: 'Муры 1', url: 'assets/images/мури 1.png' },
  ];
}
