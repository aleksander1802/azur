import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinFirstScreenComponent } from './components/1-join-first-screen/join-first-screen.component';
import { JoinComponent } from './join.component';
import { RouterModule, Routes } from '@angular/router';
import { CrumbsComponent } from 'src/app/shared/components/crumbs/crumbs.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: JoinComponent,
    },
];

@NgModule({
    declarations: [JoinComponent, JoinFirstScreenComponent],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule,
        CrumbsComponent,
    ],
})
export class JoinModule {}
