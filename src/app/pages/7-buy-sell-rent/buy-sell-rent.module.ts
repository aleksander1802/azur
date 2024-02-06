import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuySellRentFirstScreenComponent } from './components/1-buy-sell-rent-first-screen/buy-sell-rent-first-screen.component';
import { BuySellRentComponent } from './buy-sell-rent.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrumbsComponent } from 'src/app/shared/components/crumbs/crumbs.component';
import { BuySellRentSecondScreenComponent } from './components/2-buy-sell-rent-second-screen/buy-sell-rent-second-screen.component';
import { BuySellRentAdvantagesComponent } from './components/buy-sell-rent-advantages/buy-sell-rent-advantages.component';
import { SvgPercentComponent } from 'src/app/shared/components/svg-percent/svg-percent.component';

const routes: Routes = [
    {
        path: '',
        component: BuySellRentComponent,
    },
];

@NgModule({
    declarations: [
        BuySellRentComponent,
        BuySellRentFirstScreenComponent,
        BuySellRentSecondScreenComponent,
        BuySellRentAdvantagesComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule,
        CrumbsComponent,
        SvgPercentComponent,
    ],
})
export class BuySellRentModule {}
