import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [MainLayoutComponent, HeaderComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent],
})
export class SharedModule {}
