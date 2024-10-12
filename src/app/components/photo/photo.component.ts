import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
})
export class PhotoComponent {
  constructor(public dialog: MatDialog) {}

  photos1 = [
    { url: '../../assets/images/photo/photo1.png' },
    { url: '../../assets/images/photo/photo2.png' },
    { url: '../../assets/images/photo/photo3.png' },
    { url: '../../assets/images/photo/photo4.png' },
    { url: '../../assets/images/photo/photo5.png' },
  ];

  photos2 = [
    { url: '../../assets/images/photo/photo6.png' },
    { url: '../../assets/images/photo/photo7.png' },
    { url: '../../assets/images/photo/photo8.png' },
    { url: '../../assets/images/photo/photo9.png' },
    { url: '../../assets/images/photo/photo10.png' },
  ];

  openPhotoViewer(photoUrl: string): void {
    this.dialog.open(PhotoViewerComponent, {
      data: { photoUrl },
      panelClass: 'full-screen-modal'
    });
  }
}
