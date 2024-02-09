import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { CrumbsComponent } from 'src/app/shared/components/crumbs/crumbs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogFirstScreenComponent } from './components/1-blog-first-screen/blog-first-screen.component';

const routes: Routes = [
    {
        path: '',
        component: BlogComponent,
    },
];

@NgModule({
    declarations: [BlogComponent, BlogFirstScreenComponent],
    imports: [RouterModule.forChild(routes), SharedModule, CrumbsComponent],
})
export class BlogModule {}
