import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-banner',
  imports: [],
  templateUrl: './add-banner.component.html',
  styleUrl: './add-banner.component.scss'
})
export class AddBannerComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = '';
}
