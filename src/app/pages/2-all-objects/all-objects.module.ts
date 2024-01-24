import { NgModule } from '@angular/core';
import { AllObjectsComponent } from './components/all-objects/all-objects.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AllObjectsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AllObjectsModule {}
