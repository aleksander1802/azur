import { Component } from '@angular/core';
import { ContactWithUsService } from 'src/app/shared/services/contact-with-us.service';

@Component({
    selector: 'app-home-first-screen',
    templateUrl: './home-first.component.html',
    styleUrl: './home-first.component.scss',
})
export class HomeFirstScreenComponent {
    constructor(public contactWithUsService: ContactWithUsService) {}
    
}
