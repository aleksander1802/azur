import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class ContactWithUsService {
    isOpenContact: boolean = false;

    constructor(private location: Location) {
        this.setupLocationChangeListener();
    }

    private setupLocationChangeListener() {
        this.location.subscribe(() => {
            this.closeContactComponent();
        });
    }

    toggleIsOpenContact() {
        this.isOpenContact = !this.isOpenContact;
    }

    private closeContactComponent() {
        this.isOpenContact = false;
    }
}
