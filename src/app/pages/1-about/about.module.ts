import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './about.component';
import { AboutFirstScreenComponent } from './components/1-about-first-screen/about-first-screen.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
    },
];

@NgModule({
    declarations: [AboutComponent, AboutFirstScreenComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AboutModule {}
