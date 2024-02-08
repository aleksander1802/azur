import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpertiseComponent } from './expertise.component';
import { CrumbsComponent } from 'src/app/shared/components/crumbs/crumbs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpertiseFirstScreenComponent } from './components/1-expertise-first-screen/expertise-first-screen.component';
import { ExperienceBlockComponent } from 'src/app/shared/components/experience-block/experience-block.component';
import { FeedbackComponent } from 'src/app/shared/components/feedback/feedback.component';

const routes: Routes = [
    {
        path: '',
        component: ExpertiseComponent,
    },
];

@NgModule({
    declarations: [ExpertiseComponent, ExpertiseFirstScreenComponent],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule,
        CrumbsComponent,
        FeedbackComponent,
        ExperienceBlockComponent,
    ],
})
export class ExpertiseModule {}
