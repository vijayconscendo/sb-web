import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WelcomeUserBannerComponent } from '../../components/welcome-user-banner/welcome-user-banner.component';
import { MySolutioncardsComponent } from '../../components/my-solutioncards/my-solutioncards.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-history-and-statements',
  imports: [CommonModule, WelcomeUserBannerComponent, MySolutioncardsComponent, NgSelectModule, FormsModule ],
  templateUrl: './history-and-statements.component.html',
  styleUrl: './history-and-statements.component.scss'
})
export class HistoryAndStatementsComponent {

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  accounts = [
    { id: 1, name: 'MyMoBiz Account **** 1234' },
    { id: 2, name: 'MyMoBiz Account **** 5678' },
    { id: 3, name: 'MyMoBiz Account **** 9101' }
  ];
  selectedAccount: any;
}
