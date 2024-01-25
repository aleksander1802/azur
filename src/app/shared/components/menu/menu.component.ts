import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
})
export class MenuComponent {
    @Input() isOpen = false;
    @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();

    navLinks = [
        { title: 'О нас', link: '/' },
        { title: 'Все объекты', link: '/objects' },
        { title: 'Продажа', link: '/sell' },
        { title: 'Аренда', link: '/rent' },
        { title: 'Блог', link: '/blog' },
        { title: 'Присоединиться к нам', link: '/join' },
        { title: 'Купить, продать, арендовать с нами', link: '/buy-sell-rent' },
        { title: 'Экспертная оценка', link: '/expertise' },
        { title: 'Презентация', link: '/presentation' },
    ];

    onCloseMenu() {
        this.closeMenu.emit();
    }
}
