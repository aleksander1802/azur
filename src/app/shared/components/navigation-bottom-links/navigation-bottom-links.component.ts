import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation-bottom-links',
    templateUrl: './navigation-bottom-links.component.html',
    styleUrl: './navigation-bottom-links.component.scss',
})
export class NavigationBottomLinksComponent implements OnInit {
    constructor(private router: Router) {}

    currentLink: string = '';
    previousLink = '';
    nextLink = '';
    previousTitle = '';
    nextTitle = '';
    isFirstPage = true;
    isLastPage = false;

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

    ngOnInit() {
        this.updateCurrentLink();
        this.getPreviousAndNextLinks();

        console.log('init');
    }

    private updateCurrentLink() {
        this.currentLink = this.router.url || '/';
        console.log('updateCurrentLink');
    }

    private getPreviousAndNextLinks() {
        const currentIndex = this.navLinks.findIndex(
            (link) => link.link === this.currentLink
        );
        this.previousLink = this.navLinks[currentIndex - 1]?.link || '/';
        this.nextLink = this.navLinks[currentIndex + 1]?.link || '/';
        this.previousTitle = this.navLinks[currentIndex - 1]?.title || '';
        this.nextTitle = this.navLinks[currentIndex + 1]?.title || '';
        this.isFirstPage = this.currentLink === '/';
        this.isLastPage = this.currentLink === '/fee';
        console.log('getPreviousAndNextLinks');
    }
}
