import { Component, HostListener } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject, throttleTime } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    private scrollSubject = new Subject();

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                window.scrollTo(0, 0);
            }
        });

        this.scrollSubject.pipe(throttleTime(500)).subscribe(() => {
            this.onScroll();
        });
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: Event) {
        this.scrollSubject.next(event);
    }

    onScroll() {
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    }
}
