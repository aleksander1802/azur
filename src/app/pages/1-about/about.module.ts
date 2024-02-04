import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './about.component';
import { AboutFirstScreenComponent } from './components/1-about-first-screen/about-first-screen.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutSecondScreenComponent } from './components/2-about-second-screen/about-second-screen.component';
import { AboutThirdScreenComponent } from './components/3-about-third-screen/about-third-screen.component';
import { AboutFourthScreenComponent } from './components/4-about-fourth-screen/about-fourth-screen.component';
import { CrumbsComponent } from 'src/app/shared/components/crumbs/crumbs.component';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
    },
];

@NgModule({
    declarations: [
        AboutComponent,
        AboutFirstScreenComponent,
        AboutSecondScreenComponent,
        AboutThirdScreenComponent,
        AboutFourthScreenComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        CrumbsComponent,
    ],
    exports: [RouterModule],
})
export class AboutModule {}
