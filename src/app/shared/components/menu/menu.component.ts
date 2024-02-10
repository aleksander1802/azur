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
        { title: 'О нас', link: '/about' },
        { title: 'Все объекты', link: '/objects' },
        { title: 'Продажа', link: '/sell' },
        { title: 'Аренда', link: '/rent' },
        { title: 'Блог', link: '/blog' },
        { title: 'Присоединиться к нам', link: '/join' },
        { title: 'Купить, продать, арендовать с нами', link: '/buy-sell-rent' },
        { title: 'Экспертная оценка', link: '/expertise' },
        { title: 'Презентация', link: '/presentation' },
        { title: 'Управление недвижимостью', link: '/property' },
        { title: 'Консьерж-сервис', link: '/concierge' },
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
