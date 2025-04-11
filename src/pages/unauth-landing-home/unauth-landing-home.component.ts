import { Component } from '@angular/core';
import { ContentImageSplitComponent } from '../../components/content-image-split/content-image-split.component';
import { AddBannerComponent } from '../../components/add-banner/add-banner.component';
import { DownloadAppComponent } from "../../components/download-app/download-app.component";
import { AppHelpComponent } from '../../components/app-help/app-help.component';
import { SwitchBankComponent } from '../../components/switch-bank/switch-bank.component';
import { AccordionBlockComponent } from '../../components/accordion-block/accordion-block.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { UnauthBannerComponent } from '../../components/unauth-banner/unauth-banner.component';
// import { IconTextCarouselComponent } from '../../components/icon-text-carousel/icon-text-carousel.component';

@Component({
  selector: 'app-unauth-landing-home',
  imports: [
    ContentImageSplitComponent,
    AddBannerComponent,
    DownloadAppComponent,
    AppHelpComponent,
    SwitchBankComponent,
    AccordionBlockComponent,
    FooterComponent,
    UnauthBannerComponent,
    // IconTextCarouselComponent,
  ],
  templateUrl: './unauth-landing-home.component.html',
  styleUrl: './unauth-landing-home.component.scss',
})
export class UnauthLandingHomeComponent {}
