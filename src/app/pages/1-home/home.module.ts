import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFirstComponent } from './components/1-home-first-screen/home-first.component';
import { HomeComponent } from './home.component';
import { HomeSecondScreenComponent } from './components/2-home-second-screen/home-second-screen.component';
import { HomeThirdScreenComponent } from './components/3-home-third-screen/home-third-screen.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent,
        HomeFirstComponent,
        HomeSecondScreenComponent,
        HomeThirdScreenComponent,
    ],
    imports: [CommonModule, SharedModule],
    
})
export class HomeModule {}
