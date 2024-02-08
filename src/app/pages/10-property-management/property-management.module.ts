import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyManagementComponent } from './property-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { PropertyManagementFirstScreenComponent } from './components/1-property-management-first-screen/property-management-first-screen.component';
import { CrumbsComponent } from 'src/app/shared/components/crumbs/crumbs.component';
import { FeedbackComponent } from 'src/app/shared/components/feedback/feedback.component';
import { ExperienceBlockComponent } from 'src/app/shared/components/experience-block/experience-block.component';
import { PropertyManagementSecondScreenComponent } from './components/2-property-management-second-screen/property-management-second-screen.component';
import { PropertyConciergeWrapperComponent } from 'src/app/shared/components/property-concierge-wrapper/property-concierge-wrapper.component';

const routes: Routes = [
    {
        path: '',
        component: PropertyManagementComponent,
    },
];

@NgModule({
    declarations: [
        PropertyManagementComponent,
        PropertyManagementFirstScreenComponent,
        PropertyManagementSecondScreenComponent,
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
    exports: [RouterModule],
})
export class PropertyManagementModule {}
