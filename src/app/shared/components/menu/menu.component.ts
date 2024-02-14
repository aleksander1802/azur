import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactWithUsService } from '../../services/contact-with-us.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
})
export class MenuComponent {
    constructor(public contactWithUsService: ContactWithUsService) {}

    @Input() isOpen = false;
    @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();

    closeButtonColor = '#656565';

    navLinks = [
        { title: 'menu_link_about', link: '/about' },
        { title: 'menu_link_objects', link: '/objects' },
        { title: 'menu_link_sell', link: '/sell' },
        { title: 'menu_link_rent', link: '/rent' },
        { title: 'menu_link_blog', link: '/blog' },
        { title: 'menu_link_join', link: '/join' },
        { title: 'menu_link_buy-sell-rent', link: '/buy-sell-rent' },
        { title: 'menu_link_expertise', link: '/expertise' },
        { title: 'menu_link_presentation', link: '/presentation' },
        { title: 'menu_link_property', link: '/property' },
        { title: 'menu_link_concierge', link: '/concierge' },
    ];

    onCloseMenu() {
        this.closeMenu.emit();
    }

    onMenuOverlayClick(event: MouseEvent) {
        if (!(event.target as HTMLElement).closest('.menu__wrapper')) {
            this.onCloseMenu();
        }
    }
}
