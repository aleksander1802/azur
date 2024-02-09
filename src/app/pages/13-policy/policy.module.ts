import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { CrumbsComponent } from 'src/app/shared/components/crumbs/crumbs.component';
import { NgModule } from '@angular/core';
import { PolicyComponent } from './policy.component';
import { PolicyFirstScreenComponent } from './components/1-policy-first-screen/policy-first-screen.component';

const routes: Routes = [
    {
        path: '',
        component: PolicyComponent,
    },
];

@NgModule({
    declarations: [PolicyComponent, PolicyFirstScreenComponent],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule,
        CrumbsComponent,
    ],
})
export class PrivacyPolicyModule {}
