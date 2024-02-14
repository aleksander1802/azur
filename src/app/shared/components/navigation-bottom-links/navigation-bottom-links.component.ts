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

    showSellRentLinks: boolean = false;
    additionalPages = false;

    navLinks = [
        { title: 'navigation_bottom_links_home', link: '/' },
        { title: 'navigation_bottom_links_about', link: '/about' },
        { title: 'navigation_bottom_links_objects', link: '/objects' },
        { title: 'navigation_bottom_links_sell', link: '/sell' },
        { title: 'navigation_bottom_links_rent', link: '/rent' },
        {
            title: 'navigation_bottom_links_buy-sell-rent',
            link: '/buy-sell-rent',
        },
        { title: 'navigation_bottom_links_property', link: '/property' },
        { title: 'navigation_bottom_links_concierge', link: '/concierge' },
        { title: 'navigation_bottom_links_expertise', link: '/expertise' },
        { title: 'navigation_bottom_links_fee', link: '/fee' },
    ];

    ngOnInit() {
        this.updateCurrentLink();
        this.getPreviousAndNextLinks();
        this.checkSellRentLinksVisibility();
        this.checkIsCurrentPageIsAdditional();
    }

    private updateCurrentLink() {
        this.currentLink = this.router.url || '/';
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
    }

    private checkSellRentLinksVisibility() {
        this.showSellRentLinks =
            this.currentLink.startsWith('/sell/') ||
            this.currentLink.startsWith('/rent/');
    }

    private checkIsCurrentPageIsAdditional() {
        this.additionalPages =
            this.currentLink.startsWith('/policy') ||
            this.currentLink.startsWith('/blog') ||
            this.currentLink.startsWith('/join');
    }
}
