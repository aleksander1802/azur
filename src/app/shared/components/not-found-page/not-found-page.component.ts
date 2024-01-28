import { Component } from '@angular/core';

@Component({
    selector: 'app-not-found-page',
    templateUrl: './not-found-page.component.html',
    styleUrl: './not-found-page.component.scss',
})
export class NotFoundPageComponent {
    isOpen = false;

    toggleMenu() {
        this.isOpen = !this.isOpen;
    }
}
