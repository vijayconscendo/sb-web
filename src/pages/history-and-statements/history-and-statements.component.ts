import { Component } from '@angular/core';
import { WelcomeUserBannerComponent } from '../../components/welcome-user-banner/welcome-user-banner.component';
import { MySolutioncardsComponent } from '../../components/my-solutioncards/my-solutioncards.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-history-and-statements',
  imports: [WelcomeUserBannerComponent, MySolutioncardsComponent, NgSelectModule, FormsModule ],
  templateUrl: './history-and-statements.component.html',
  styleUrl: './history-and-statements.component.scss'
})
export class HistoryAndStatementsComponent {
  accounts = [
    { id: 1, name: 'MyMoBiz Account **** 1234' },
    { id: 2, name: 'MyMoBiz Account **** 5678' },
    { id: 3, name: 'MyMoBiz Account **** 9101' }
  ];
  selectedAccount: any;
}
