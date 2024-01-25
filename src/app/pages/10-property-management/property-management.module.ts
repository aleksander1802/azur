import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyManagementComponent } from './components/property-management/property-management.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: PropertyManagementComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PropertyManagementModule {}
