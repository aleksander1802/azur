import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
    selector: 'app-feedback',
    standalone: true,
    imports: [CommonModule, SharedModule, TranslocoRootModule],
    templateUrl: './feedback.component.html',
    styleUrl: './feedback.component.scss',
})
export class FeedbackComponent implements OnInit {
    @Input() backgroundImage: string | undefined =
        'assets/images/rent/rent_second_full_1.jpg';

    @Input() feedbackTextArea = false;

    @Input() feedbackTitle = 'feedback_title_default';

    feedbackForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.feedbackForm = this.fb.group({
            name: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            privacyPolicy: [false, Validators.requiredTrue],
            feedbackText: ['', this.feedbackTextArea && Validators.required],
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

    get feedbackText() {
        return this.feedbackForm.get('feedbackText');
    }

    getError(controlName: string, errorName: string) {
        return this.feedbackForm.get(controlName)?.hasError(errorName);
    }
}
