import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomeComponent } from './pages/0-home/home.component';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'about',
                loadChildren: () =>
                    import('./pages/1-about/about.module').then(
                        (mod) => mod.AboutModule
                    ),
            },
            {
                path: 'objects',
                loadChildren: () =>
                    import('./pages/2-all-objects/all-objects.module').then(
                        (mod) => mod.AllObjectsModule
                    ),
            },
            {
                path: 'sell',
                loadChildren: () =>
                    import('./pages/3-sell/sell.module').then(
                        (mod) => mod.SellModule
                    ),
            },
            {
                path: 'rent',
                loadChildren: () =>
                    import('./pages/4-rent/rent.module').then(
                        (mod) => mod.RentModule
                    ),
            },
            {
                path: 'property',
                loadChildren: () =>
                    import(
                        './pages/10-property-management/property-management.module'
                    ).then((mod) => mod.PropertyManagementModule),
            },
        ],
    },
    {
        path: '**',
        component: NotFoundPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
