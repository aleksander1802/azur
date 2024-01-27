import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SwiperComponent } from './components/swiper/swiper.component';

@NgModule({
    declarations: [
        MainLayoutComponent,
        HeaderComponent,
        MenuComponent,
        FooterComponent,
    ],
    imports: [CommonModule, RouterModule, ReactiveFormsModule, SwiperComponent],
    exports: [HeaderComponent, MenuComponent, SwiperComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
