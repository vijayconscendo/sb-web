import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-feature-card',
  imports: [],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {
  @Input() image!: string;
  @Input() heading!: string;
  @Input() description!: string;
  @Input() buttonText!: string;
  
}