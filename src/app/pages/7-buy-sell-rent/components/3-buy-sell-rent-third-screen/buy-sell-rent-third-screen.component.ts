import { Component, ElementRef } from '@angular/core';
import { RealEstate } from '../../models/buy-sell-rent.types';

@Component({
    selector: 'app-buy-sell-rent-third-screen',
    templateUrl: './buy-sell-rent-third-screen.component.html',
    styleUrl: './buy-sell-rent-third-screen.component.scss',
})
export class BuySellRentThirdScreenComponent {
    realEstates: RealEstate[] = [
        {
            title: 'Купить',
            description:
                'Эксклюзивный выбор апартаментов во Франции. Для того чтобы выбрать лучший объект недвижимости, нужно сделать только одно - довериться нам. Свяжитесь с нами, чтобы подобрать предпочтительный вариант из перечня локаций и пространств.',
            imageUrl: 'assets/images/letters/b.svg',
            actionLink: '',
        },
        {
            title: 'Продать',
            description:
                'Осуществить продажу недвижимости во Франции можно легко: обратитесь к менеджерам Azur Life, чтобы урегулировать все административные формальности, связанные с вашей недвижимостью.',
            imageUrl: 'assets/images/letters/s.svg',
            actionLink: '',
        },
        {
            title: 'Арендовать',
            description:
                ' Azur Life предоставляет опцию полного сопровождения сделки аренды. Мы выберем премиальные виллы и апартаменты под Ваш запрос без комиссии и дополнительных наценок. Всё, что вам нужно сделать - озвучить Ваши предпочтения.',
            imageUrl: 'assets/images/letters/r.svg',
            actionLink: '',
        },
    ];
}
