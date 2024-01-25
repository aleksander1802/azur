import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
    declarations: [MainLayoutComponent, HeaderComponent, MenuComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, MenuComponent],
})
export class SharedModule {}
