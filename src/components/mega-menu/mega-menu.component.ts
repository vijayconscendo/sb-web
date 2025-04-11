import { Component, inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MegaMenuService } from '../../services/mega-menu.service'; // Corrected spelling
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mega-menu',
  imports: [CommonModule],
  templateUrl: './mega-menu.component.html',
  styleUrl: './mega-menu.component.scss'
})
export class MegaMenuComponent {
  private platformId = inject(PLATFORM_ID);
  isMobileMenuOpen = false;
  activeMegaMenu: string | null = null;
  activeAccordion: string | null = null;
  isMobile = false;

  megaMenuService = inject(MegaMenuService);
  private subscription = new Subscription();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
      window.addEventListener('resize', () => {
        this.isMobile = window.innerWidth <= 768;
        
        // Close mega menus on resize to desktop
        if (!this.isMobile) {
          this.activeAccordion = null;
          this.megaMenuService.toggleMegaMenu(null);
        }
      });
    }
  }

  ngOnInit() {
    // Subscribe to mobile menu state changes
    this.subscription.add(
      this.megaMenuService.mobileMenuOpen$.subscribe(isOpen => {
        this.isMobileMenuOpen = isOpen;
        
        // Toggle body class for preventing scroll
        if (isPlatformBrowser(this.platformId)) {
          if (isOpen) {
            document.body.classList.add('menu-open');
          } else {
            document.body.classList.remove('menu-open');
          }
        }
      })
    );
    
    // Subscribe to mega menu state changes
    this.subscription.add(
      this.megaMenuService.megaMenuState$.subscribe(menuId => {
        this.activeMegaMenu = menuId;
      })
    );
  }

  ngOnDestroy() {
    // Clean up subscriptions
    this.subscription.unsubscribe();
    
    // Remove body class when component is destroyed
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('menu-open');
    }
    
    // Remove event listeners
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', () => {});
    }
  }

  toggleMobileMenu() {
    this.megaMenuService.toggleMobileMenu();
  }

  toggleAccordion(menu: string, event: Event) {
    if (this.isMobile) {
      event.preventDefault();
      if (this.activeAccordion === menu) {
        this.activeAccordion = null;
        this.megaMenuService.toggleMegaMenu(null);
      } else {
        this.activeAccordion = menu;
        this.megaMenuService.toggleMegaMenu(menu);
      }
    } else {
      // For desktop, just update the activeMegaMenu
      this.activeMegaMenu = menu;
      this.megaMenuService.toggleMegaMenu(menu);
    }
  }

  handleMouseLeave(event: MouseEvent) {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (!relatedTarget?.closest('.mega-menu')) {
      this.activeMegaMenu = null;
      this.megaMenuService.toggleMegaMenu(null);
    }
  }
}