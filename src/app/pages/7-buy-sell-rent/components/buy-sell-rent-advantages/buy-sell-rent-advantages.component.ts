import { Component, Input } from '@angular/core';
import { ActiveTab, Advantages } from '../../models/buy-sell-rent.types';

@Component({
    selector: 'app-buy-sell-rent-advantages',
    templateUrl: './buy-sell-rent-advantages.component.html',
    styleUrl: './buy-sell-rent-advantages.component.scss',
})
export class BuySellRentAdvantagesComponent {
    @Input() advantage: ActiveTab = 'buy';

    advantagesData: Advantages = {
        buy: {
            title: 'Преимущества покупки с Azur Life',
            advantages: {
                first: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'remote deal',
                    description:
                        'Покупка недвижимости на Вашем языке. Опытные сотрудники Azur Life сопровождают клиентов на протяжении всего пути реализации сделки с легкостью во взаимодействии.',
                },

                second: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'remote deal',
                    description:
                        'Покупка недвижимости станет для Вас приятным времяпрепровождением. Мы организуем Ваше пребывание во Франции во время покупки объекта так, чтобы это было легко, приятно и удобно для Вас.',
                },

                third: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'remote deal',
                    description:
                        'Покупка недвижимости происходит без дополнительных наценок и комиссий, а выбор объектов осуществляется из премиальной базы недвижимости, чтобы подобрать вариант, который лучше всего будет подходить Вам.',
                },
            },
        },
        rent: {
            title: 'Преимущества аренды с Azur Life',
            advantages: {
                first: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'экспертное сопровождение любой сделки',
                    description:
                        'Аренда  недвижимости осуществляется легко и последовательно. Для оказания качественных услуг в сфере недвижимости, мы имеем все необходимые лицензии, страховые и финансовые гарантии, требуемые французским законодательством.',
                },

                second: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'проверенная база недвижимости',
                    description:
                        'Azur Life является членом Национальной Федерации Агентов Недвижимости (FNAIM) и имеет допуск к обширной базе объектов недвижимости по всей Франции. Это дает возможность выбирать уникальные объекты на тот срок, который будет удобен именно Вам.',
                },

                third: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'полный спектр услуг',
                    description:
                        'Мы организуем консьерж-сервис и управление арендованной недвижимостью, чтобы проживание в выбранном объекте приносило только удовольствие.',
                },
            },
        },
        sell: {
            title: 'Преимущества продажи недвижимости с нами',
            advantages: {
                first: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'знание рынка',
                    description:
                        'Благодаря многолетней работе в данной сфере и накопленному опыту мы способны быстро и легко осуществить сделку по продаже недвижимости: найдем покупателя, определим выгодную для Вас стоимость недвижимости  и оформим все документы.',
                },

                second: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: '360°',
                    description:
                        '360° обслуживание клиента. Мы берем на себя ответственность за ведение сделки, а также оформляем все документы, требуемые французским законодательством при продаже недвижимости. Также мы организуем Ваше пребывание во Франции во время заключения сделки.',
                },

                third: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'remote deal',
                    description:
                        'Продажа недвижимости на Вашем языке. Опытные сотрудники Azur Life сопровождают клиентов на протяжении всего пути реализации сделки с легкостью во взаимодействии с Вами.',
                },
            },
        },
    };
}
