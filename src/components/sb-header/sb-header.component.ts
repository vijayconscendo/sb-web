import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuService } from '../../services/mega-menu.service';


@Component({
  selector: 'app-sb-header',
  imports: [CommonModule],
  templateUrl: './sb-header.component.html',
  styleUrl: './sb-header.component.scss'
})
export class SbHeaderComponent {
  private megaMenuService = inject(MegaMenuService);
  toggleSolutionsMenu() {
    // Toggle mobile menu open
    this.megaMenuService.toggleMobileMenu();
    
    // If you also want to automatically open the solutions submenu
    this.megaMenuService.toggleMegaMenu('solutions');
  }
}
