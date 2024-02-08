import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConciergeServiceFirstScreenComponent } from './components/1-concierge-service-first-screen/concierge-service-first-screen.component';
import { CommonModule } from '@angular/common';
import { CrumbsComponent } from 'src/app/shared/components/crumbs/crumbs.component';
import { ExperienceBlockComponent } from 'src/app/shared/components/experience-block/experience-block.component';
import { FeedbackComponent } from 'src/app/shared/components/feedback/feedback.component';
import { PropertyConciergeWrapperComponent } from 'src/app/shared/components/property-concierge-wrapper/property-concierge-wrapper.component';
import { ConciergeServiceComponent } from './concierge-service.component';

const routes: Routes = [
    {
        path: '',
        component: ConciergeServiceComponent,
    },
];

@NgModule({
    declarations: [
        ConciergeServiceComponent,
        ConciergeServiceFirstScreenComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule,
        CrumbsComponent,
        FeedbackComponent,
        ExperienceBlockComponent,
        PropertyConciergeWrapperComponent,
    ],
})
export class ConciergeServiceModule {}
