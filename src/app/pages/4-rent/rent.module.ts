import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterSortComponent } from 'src/app/shared/components/filter-sort/filter-sort.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RentComponent } from './rent.component';
import { RentFirstScreenComponent } from './components/1-rent-first-screen/rent-first-screen.component';
import { RentSecondScreenComponent } from './components/2-rent-second-screen/rent-second-screen.component';
import { DetailedPageComponent } from 'src/app/shared/components/detailed-page/detailed-page.component';
import { CrumbsComponent } from 'src/app/shared/components/crumbs/crumbs.component';

const routes: Routes = [
    {
        path: '',
        component: RentComponent,
    },
    {
        path: ':rentId',
        component: DetailedPageComponent,
    },
];

@NgModule({
    declarations: [
        RentComponent,
        RentFirstScreenComponent,
        RentSecondScreenComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        FilterSortComponent,
        CrumbsComponent,
    ],
})
export class RentModule {}
