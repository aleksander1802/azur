import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { CrumbsComponent } from 'src/app/shared/components/crumbs/crumbs.component';
import { NgModule } from '@angular/core';
import { FeeComponent } from './fee.component';
import { FeeFirstScreenComponent } from './components/1-fee-first-screen/fee-first-screen.component';

const routes: Routes = [
    {
        path: '',
        component: FeeComponent,
    },
];

@NgModule({
    declarations: [FeeComponent, FeeFirstScreenComponent],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule,
        CrumbsComponent,
    ],
})
export class FeeModule {}
