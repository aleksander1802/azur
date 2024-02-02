import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-navigation-bottom-links',
    templateUrl: './navigation-bottom-links.component.html',
    styleUrl: './navigation-bottom-links.component.scss',
})
export class NavigationBottomLinksComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {
        this.updateCurrentLink();
    }

    currentLink: string = '';

    navLinks = [
        { title: 'Вернуться на главную страницу', link: '/' },
        { title: 'О нас', link: '/about' },
        { title: 'Все объекты', link: '/objects' },
        { title: 'Продажа', link: '/sell' },
        { title: 'Аренда', link: '/rent' },
        { title: 'Купить, продать, арендовать с нами', link: '/buy-sell-rent' },
        { title: 'Презентация', link: '/presentation' },
        { title: 'Экспертная оценка', link: '/expertise' },
        { title: 'Управление недвижимостью', link: '/property' },
        { title: 'Консьерж-сервис', link: '/concierge' },
        { title: 'Наша комиссия', link: '/fee' },
    ];

    private updateCurrentLink() {
        this.currentLink = this.router.url || '/';
    }

    getCurrentIndex() {
        const currentLinkWithoutParams = this.currentLink.split('/')[1];
        return this.navLinks.findIndex((link) =>
            link.link.includes(currentLinkWithoutParams)
        );
    }

    isOnFirstPage() {
        return this.getCurrentIndex() === 0;
    }

    isOnLastPage() {
        return this.getCurrentIndex() === this.navLinks.length - 1;
    }

    getPreviousLink() {
        return this.isOnFirstPage()
            ? null
            : this.navLinks[this.getCurrentIndex() - 1].link;
    }

    getNextLink() {
        return this.isOnLastPage()
            ? null
            : this.navLinks[this.getCurrentIndex() + 1].link;
    }
}
