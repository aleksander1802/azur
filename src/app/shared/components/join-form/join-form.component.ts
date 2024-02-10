import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ContactWithUsService } from '../../services/contact-with-us.service';

@Component({
    selector: 'app-join-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    templateUrl: './join-form.component.html',
    styleUrl: './join-form.component.scss',
})
export class JoinFormComponent implements OnInit {
    joinForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private contactWithUsService: ContactWithUsService
    ) {}

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

    handleCheckboxClick(event: MouseEvent) {
        event.preventDefault();
    }

    onSubmit() {
        this.joinForm.reset();
        this.contactWithUsService.toggleIsOpenContact();
    }
}
