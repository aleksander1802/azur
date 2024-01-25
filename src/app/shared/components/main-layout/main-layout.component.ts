import { Component } from '@angular/core';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
    isOpen = false;

    toggleMenu() {
        this.isOpen = !this.isOpen;
    }
}
