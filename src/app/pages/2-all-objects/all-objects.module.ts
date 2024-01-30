import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AllObjectsComponent } from './all-objects.component';
import { ObjectsFirstScreenComponent } from './components/1-objects-first-screen/objects-first-screen.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: AllObjectsComponent,
    },
];

@NgModule({
    declarations: [AllObjectsComponent, ObjectsFirstScreenComponent],
    imports: [RouterModule.forChild(routes), SharedModule],
    exports: [RouterModule],
})
export class AllObjectsModule {}
