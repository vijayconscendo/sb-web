import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TinyHeaderComponent } from '../components/tiny-header/tiny-header.component';
import { SbHeaderComponent } from '../components/sb-header/sb-header.component';
import { MegaMenuComponent } from '../components/mega-menu/mega-menu.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TinyHeaderComponent,
    SbHeaderComponent,
    MegaMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'standard-bank-web';
}
