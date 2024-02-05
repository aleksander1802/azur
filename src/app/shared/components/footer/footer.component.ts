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
        { title: 'О нас', link: '/about' },
        { title: 'Все объекты', link: '/objects' },
        { title: 'Продажа', link: '/sell' },
        { title: 'Аренда', link: '/rent' },
        { title: 'Купить, продать, арендовать с нами', link: '/buy-sell-rent' },
        { title: 'Презентация', link: '/presentation' },
        { title: 'Экспертная оценка', link: '/expertise' },
        { title: 'Управление недвижимостью', link: '/property' },
        { title: 'Консьерж-сервис', link: '/concierge' },
        { title: 'Наша комиссия', link: '/fee' },
        { title: 'Политика конфиденциальности', link: '/policy' },
    ];

    regions = [
        { title: 'Апартаменты в Больё-сюр-Мер' },
        { title: 'Вилла в Больё-сюр-Мер' },
        { title: 'Вилла в Эзе' },
        { title: 'Вилла в Сен-Жан-Кап-Ферра' },
        { title: 'Апартаменты в Эзе' },
        { title: 'Апартаменты в Сен-Жан-Кап-Ферра' },
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
