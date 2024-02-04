import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SellComponent } from './sell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SellFirstScreenComponent } from './components/1-sell-first-screen/sell-first-screen.component';
import { SellSecondScreenComponent } from './components/2-sell-second-screen/sell-second-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChoiceSvgComponent } from 'src/app/shared/components/choice-svg/choice-svg.component';
import { ExclusiveSvgComponent } from 'src/app/shared/components/exclusive-svg/exclusive-svg.component';
import { FilterSortComponent } from 'src/app/shared/components/filter-sort/filter-sort.component';
import { DetailedPageComponent } from 'src/app/shared/components/detailed-page/detailed-page.component';
import { CrumbsComponent } from 'src/app/shared/components/crumbs/crumbs.component';

const routes: Routes = [
    {
        path: '',
        component: SellComponent,
    },
    {
        path: ':sellId',
        component: DetailedPageComponent,
    },
];

@NgModule({
    declarations: [
        SellComponent,
        SellFirstScreenComponent,
        SellSecondScreenComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChoiceSvgComponent,
        ExclusiveSvgComponent,
        FilterSortComponent,
        CrumbsComponent,
    ],
    exports: [RouterModule],
})
export class SellModule {}
