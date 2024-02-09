import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-join-first-screen',
    templateUrl: './join-first-screen.component.html',
    styleUrl: './join-first-screen.component.scss',
})
export class JoinFirstScreenComponent {
    currentCrumbsTitle = 'Присоединиться к нам';

    joinForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.joinForm = this.fb.group({
            name: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            joinText: ['', Validators.required],
            privacyPolicy: [false, Validators.requiredTrue],
        });
    }

    get name() {
        return this.joinForm.get('name');
    }

    get email() {
        return this.joinForm.get('email');
    }

    get phone() {
        return this.joinForm.get('phone');
    }

    get joinText() {
        return this.joinForm.get('joinText');
    }

    getError(controlName: string, errorName: string) {
        return this.joinForm.get(controlName)?.hasError(errorName);
    }
}
