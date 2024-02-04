import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'app-crumbs',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: './crumbs.component.html',
    styleUrl: './crumbs.component.scss',
})
export class CrumbsComponent {
    @Input() current = '';
    @Input() detailed = '';
}
