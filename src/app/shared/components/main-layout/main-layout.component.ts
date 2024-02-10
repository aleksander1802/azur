import { Component } from '@angular/core';
import { ContactWithUsService } from '../../services/contact-with-us.service';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
    constructor(public contactWithUsService: ContactWithUsService) {}

    isOpen = false;

    toggleMenu() {
        this.isOpen = !this.isOpen;
    }
}
