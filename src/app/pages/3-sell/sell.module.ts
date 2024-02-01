import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SellComponent } from './sell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SellFirstScreenComponent } from './components/1-sell-first-screen/sell-first-screen.component';
import { SellSecondScreenComponent } from './components/2-sell-second-screen/sell-second-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortingPipe } from 'src/app/shared/pipes/sorting.pipe';
import { ChoiceSvgComponent } from 'src/app/shared/components/choice-svg/choice-svg.component';
import { ExclusiveSvgComponent } from 'src/app/shared/components/exclusive-svg/exclusive-svg.component';

const routes: Routes = [
    {
        path: '',
        component: SellComponent,
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
    ],
    exports: [RouterModule],
})
export class SellModule {}
