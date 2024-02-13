import { Component } from '@angular/core';

@Component({
    selector: 'app-blog-first-screen',
    templateUrl: './blog-first-screen.component.html',
    styleUrl: './blog-first-screen.component.scss',
})
export class BlogFirstScreenComponent {
    currentCrumbsTitle = 'blog_first_title';

    blogText = ['blog_text_first', 'blog_text_second'];
}
