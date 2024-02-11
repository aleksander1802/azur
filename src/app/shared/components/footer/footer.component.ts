import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
    feedbackForm!: FormGroup;

    navLinks = [
        { title: 'footer_navigation_about', link: '/about' },
        { title: 'footer_navigation_objects', link: '/objects' },
        { title: 'footer_navigation_sell', link: '/sell' },
        { title: 'footer_navigation_rent', link: '/rent' },
        { title: 'footer_navigation_buy-sell-rent', link: '/buy-sell-rent' },
        { title: 'footer_navigation_presentation', link: '/presentation' },
        { title: 'footer_navigation_expert', link: '/expertise' },
        { title: 'footer_navigation_management', link: '/property' },
        { title: 'footer_navigation_concierge', link: '/concierge' },
        { title: 'footer_navigation_fee', link: '/fee' },
        { title: 'footer_navigation_privacy', link: '/policy' },
    ];

    regions = [
        { title: 'footer_regions_apartments_mer' },
        { title: 'footer_regions_villa_mer' },
        { title: 'footer_regions_villas-ezze' },
        { title: 'footer_regions_villa-ferra' },
        { title: 'footer_regions_apartments-ezze' },
        { title: 'footer_regions_apartments-ferra' },
    ];

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.feedbackForm = this.fb.group({
            name: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
        });
    }

    get name() {
        return this.feedbackForm.get('name');
    }

    get email() {
        return this.feedbackForm.get('email');
    }

    get phone() {
        return this.feedbackForm.get('phone');
    }

    getError(controlName: string, errorName: string) {
        return this.feedbackForm.get(controlName)?.hasError(errorName);
    }
}
