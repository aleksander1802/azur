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
                path: 'blog',
                loadChildren: () =>
                    import('./pages/5-blog/blog.module').then(
                        (mod) => mod.BlogModule
                    ),
            },
            {
                path: 'join',
                loadChildren: () =>
                    import('./pages/6-join/join.module').then(
                        (mod) => mod.JoinModule
                    ),
            },
            {
                path: 'buy-sell-rent',
                loadChildren: () =>
                    import('./pages/7-buy-sell-rent/buy-sell-rent.module').then(
                        (mod) => mod.BuySellRentModule
                    ),
            },
            {
                path: 'property',
                loadChildren: () =>
                    import(
                        './pages/10-property-management/property-management.module'
                    ).then((mod) => mod.PropertyManagementModule),
            },
            {
                path: 'concierge',
                loadChildren: () =>
                    import(
                        './pages/11-concierge-service/concierge-service.module'
                    ).then((mod) => mod.ConciergeServiceModule),
            },
            {
                path: 'expertise',
                loadChildren: () =>
                    import('./pages/8-expertise/expertise.module').then(
                        (mod) => mod.ExpertiseModule
                    ),
            },
            {
                path: 'fee',
                loadChildren: () =>
                    import('./pages/12-fee/fee.module').then(
                        (mod) => mod.FeeModule
                    ),
            },
            {
                path: 'policy',
                loadChildren: () =>
                    import('./pages/13-policy/policy.module').then(
                        (mod) => mod.PrivacyPolicyModule
                    ),
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
