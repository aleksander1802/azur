import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-home-eighth-screen',
    templateUrl: './home-eighth-screen.component.html',
    styleUrls: [
        './home-eighth-screen.component.scss',
        './home-eighth-screen-checkbox.component.scss',
    ],
})
export class HomeEighthScreenComponent {
    emailForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.emailForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            privacyPolicy: [false, Validators.requiredTrue],
        });
    }

    get email() {
        return this.emailForm.get('email');
    }

    getError(controlName: string, errorName: string) {
        return this.emailForm.get(controlName)?.hasError(errorName);
    }
}
