import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switch-bank',
  imports: [],
  templateUrl: './switch-bank.component.html',
  styleUrl: './switch-bank.component.scss'
})
export class SwitchBankComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = '';
}
