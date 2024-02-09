import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Router } from '@angular/router';

@Component({
    selector: 'app-crumbs',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: './crumbs.component.html',
    styleUrl: './crumbs.component.scss',
})
export class CrumbsComponent implements OnInit {
    constructor(private router: Router) {}

    @Input() current = '';

    currentLink: string = '';

    detailedSell = false;
    detailedRent = false;

    ngOnInit() {
        this.updateCurrentLink();
        this.checkSellLink();
        this.checkRentLink();
    }

    private updateCurrentLink() {
        this.currentLink = this.router.url || '/';
    }

    private checkSellLink() {
        this.detailedSell = this.currentLink.startsWith('/sell/');

        if (this.detailedSell && this.currentLink.split('/')[2]) {
            this.current = 'Объект на продажу';
        }
    }

    private checkRentLink() {
        this.detailedRent = this.currentLink.startsWith('/rent/');
        if (this.detailedRent && this.currentLink.split('/')[2]) {
            this.current = 'Объект в аренду';
        }
    }
}
