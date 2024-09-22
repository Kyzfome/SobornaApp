import { Component } from '@angular/core';
import { BootstrapOptions } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public link: string = 'Головна';
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public setLink(link: string) {
    this.link = link;
  }
}
