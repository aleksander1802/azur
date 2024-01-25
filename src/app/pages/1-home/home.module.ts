import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFirstComponent } from './components/1-home-first/home-first.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent, HomeFirstComponent],
    imports: [CommonModule],
})
export class HomeModule {}
