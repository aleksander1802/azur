import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeFirstScreenComponent } from './components/1-home-first-screen/home-first.component';
import { HomeSecondScreenComponent } from './components/2-home-second-screen/home-second-screen.component';
import { HomeThirdScreenComponent } from './components/3-home-third-screen/home-third-screen.component';
import { HomeFourthScreenComponent } from './components/4-home-fourth-screen/home-fourth-screen.component';
import { HomeFifthScreenComponent } from './components/5-home-fifth-screen/home-fifth-screen.component';
import { HomeSixthScreenComponent } from './components/6-home-sixth-screen/home-sixth-screen.component';
import { HomeSeventhScreenComponent } from './components/7-home-seventh-screen/home-seventh-screen.component';
import { HomeEighthScreenComponent } from './components/8-home-eighth-screen/home-eighth-screen.component';

@NgModule({
    declarations: [
        HomeComponent,
        HomeFirstScreenComponent,
        HomeSecondScreenComponent,
        HomeThirdScreenComponent,
        HomeFourthScreenComponent,
        HomeFifthScreenComponent,
        HomeSixthScreenComponent,
        HomeSeventhScreenComponent,
        HomeEighthScreenComponent,
    ],
    imports: [CommonModule, SharedModule],
})
export class HomeModule {}
