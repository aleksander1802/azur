import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AllObjectsComponent } from './all-objects.component';
import { ObjectsFirstScreenComponent } from './components/1-objects-first-screen/objects-first-screen.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ObjectsSecondScreenComponent } from './components/2-objects-second-screen/objects-second-screen.component';
import { ObjectsThirdScreenComponent } from './components/3-objects-third-screen/objects-third-screen.component';
import { CrumbsComponent } from 'src/app/shared/components/crumbs/crumbs.component';

const routes: Routes = [
    {
        path: '',
        component: AllObjectsComponent,
    },
];

@NgModule({
    declarations: [
        AllObjectsComponent,
        ObjectsFirstScreenComponent,
        ObjectsSecondScreenComponent,
        ObjectsThirdScreenComponent,
    ],
    imports: [RouterModule.forChild(routes), SharedModule, CrumbsComponent],
    exports: [RouterModule],
})
export class AllObjectsModule {}
