import { Component } from '@angular/core';
import { ContactWithUsService } from '../../services/contact-with-us.service';
import { CommonModule } from '@angular/common';
import { JoinFormComponent } from '../join-form/join-form.component';
import { SvgCloseButtonComponent } from '../svg-close-button/svg-close-button.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
    selector: 'app-contact-with-us',
    standalone: true,
    imports: [
        JoinFormComponent,
        CommonModule,
        SvgCloseButtonComponent,
        TranslocoRootModule,
    ],
    templateUrl: './contact-with-us.component.html',
    styleUrl: './contact-with-us.component.scss',
})
export class ContactWithUsComponent {
    constructor(public contactWithUsService: ContactWithUsService) {}

    onCloseContactForm() {
        this.contactWithUsService.toggleIsOpenContact();
    }

    onContactWithUsOverlayClick(event: MouseEvent) {
        if (!(event.target as HTMLElement).closest('.contact__wrapper')) {
            this.onCloseContactForm();
        }
    }
}
