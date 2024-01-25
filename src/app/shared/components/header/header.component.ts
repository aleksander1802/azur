import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    @Output() openMenu: EventEmitter<void> = new EventEmitter<void>();

    isMenuOpen = false;

    onOpenMenu() {
        this.openMenu.emit();
    }
}
