import { Component } from '@angular/core';
import { PageBannerOneComponent } from '../../components/page-banner-one/page-banner-one.component';
import { CommonModule } from '@angular/common';
import { UnauthSolutionGridComponent } from '../../components/unauth-solution-grid/unauth-solution-grid.component';
import { CtaOneComponent } from '../../components/cta-one/cta-one.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SolutionsRangeCarouselComponent } from '../../components/solutions-range-carousel/solutions-range-carousel.component';
import { MoneyManageCarouselComponent } from '../../components/money-manage-carousel/money-manage-carousel.component';

@Component({
  selector: 'app-unauth-solutions',
  imports: [PageBannerOneComponent, CommonModule, UnauthSolutionGridComponent, CtaOneComponent, FooterComponent, SolutionsRangeCarouselComponent, MoneyManageCarouselComponent],
  templateUrl: './unauth-solutions.component.html',
  styleUrl: './unauth-solutions.component.scss'
})
export class UnauthSolutionsComponent {

}
