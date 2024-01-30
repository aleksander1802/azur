import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SwiperComponent } from './components/swiper/swiper.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LogoCircleComponent } from './components/logo-circle/logo-circle.component';
import { CrumbsComponent } from './components/crumbs/crumbs.component';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
    declarations: [
        MainLayoutComponent,
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        NotFoundPageComponent,
        ExperienceComponent,
        CrumbsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        SwiperComponent,
        LogoCircleComponent,
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        SwiperComponent,
        ReactiveFormsModule,
        RouterModule,
        LogoCircleComponent,
        CrumbsComponent,
        ExperienceComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
