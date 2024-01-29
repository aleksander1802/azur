import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-crumbs',
    templateUrl: './crumbs.component.html',
    styleUrl: './crumbs.component.scss',
})
export class CrumbsComponent {
    @Input() link = '';
    @Input() linkTitle = '';
    @Input() current = '';
}
