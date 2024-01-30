import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SellComponent } from './sell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SellFirstScreenComponent } from './components/1-sell-first-screen/sell-first-screen.component';

const routes: Routes = [
    {
        path: '',
        component: SellComponent,
    },
];

@NgModule({
    declarations: [SellComponent, SellFirstScreenComponent],
    imports: [RouterModule.forChild(routes), SharedModule],
    exports: [RouterModule],
})
export class SellModule {}
