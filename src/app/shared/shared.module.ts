import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperComponent } from './components/swiper/swiper.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LogoCircleComponent } from './components/logo-circle/logo-circle.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FilteringPipe } from './pipes/filtering.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { NavigationBottomLinksComponent } from './components/navigation-bottom-links/navigation-bottom-links.component';
import { breakSentenceWithBRPipe } from './pipes/break-sentence.pipe';

@NgModule({
    declarations: [
        MainLayoutComponent,
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        NotFoundPageComponent,
        ExperienceComponent,
        FilteringPipe,
        SortingPipe,
        NavigationBottomLinksComponent,
        breakSentenceWithBRPipe,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        SwiperComponent,
        LogoCircleComponent,
        FormsModule,
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        SwiperComponent,
        ReactiveFormsModule,
        RouterModule,
        LogoCircleComponent,
        ExperienceComponent,
        FilteringPipe,
        SortingPipe,
        NavigationBottomLinksComponent,
        breakSentenceWithBRPipe,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
