import { Component, OnInit } from '@angular/core';
import { DetailedFirstScreenComponent } from './components/1-detailed-first-screen/detailed-first-screen.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SellOrRent } from '../../models/home.types';
import { SharedModule } from '../../shared.module';
import { CommonModule } from '@angular/common';
import { DetailedSecondScreenComponent } from './components/2-detailed-second-screen/detailed-second-screen.component';
import { DetailedThirdScreenComponent } from './components/3-detailed-third-screen/detailed-third-screen.component';
import { DetailedFourthScreenComponent } from './components/4-detailed-fourth-screen/detailed-fourth-screen.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
    selector: 'app-detailed-page',
    standalone: true,
    imports: [
        SharedModule,
        CommonModule,
        DetailedFirstScreenComponent,
        DetailedSecondScreenComponent,
        DetailedThirdScreenComponent,
        DetailedFourthScreenComponent,
        FeedbackComponent,
        TranslocoRootModule,
    ],
    templateUrl: './detailed-page.component.html',
    styleUrl: './detailed-page.component.scss',
})
export class DetailedPageComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router) {}

    currentLink: string = '';
    currentId: string = '';

    currentObject: SellOrRent | null = null;

    mockData: SellOrRent[] = [
        {
            id: '49ed4276-599d-49de-9171-2d1339c1ee14',
            category: 'apartments',
            address: 'detailed_address_cannes',
            title: 'detailed_title',
            subtitle: 'detailed_subtitle',
            description: 'detailed_description',
            descriptionFull: [
                'detailed_second_paragraph_first',
                'detailed_second_paragraph_second',
                'detailed_second_paragraph_third',
            ],
            img: 'assets/images/rent/rent_second_1.jpg',
            imageFull: 'assets/images/sell/sell_full_1.jpg',
            price: 1000000,
            area: 104.73,
            large: true,
            choice: true,
            sell: true,
        },
        {
            id: '228541aa-8c1b-43d6-aa08-00a735625f09',
            category: 'apartments',
            address: 'detailed_address_nice',
            title: 'detailed_title',
            subtitle: 'detailed_subtitle',
            description: 'detailed_description',
            descriptionFull: [
                'detailed_second_paragraph_first',
                'detailed_second_paragraph_second',
                'detailed_second_paragraph_third',
            ],
            img: 'assets/images/rent/rent_second_2.jpg',
            imageFull: 'assets/images/sell/sell_full_2.jpg',

            price: 1600000,
            area: 114.73,
            exclusive: true,
            sell: true,
        },
        {
            id: '7d42aa35-f374-4e1a-ae3d-e129e191ca10',
            category: 'apartments',
            address: 'detailed_address_cannes',
            title: 'detailed_title',
            subtitle: 'detailed_subtitle',
            description: 'detailed_description',
            descriptionFull: [
                'detailed_second_paragraph_first',
                'detailed_second_paragraph_second',
                'detailed_second_paragraph_third',
            ],
            img: 'assets/images/rent/rent_second_3.jpg',
            imageFull: 'assets/images/sell/sell_full_3.jpg',
            price: 2000000,
            area: 124.73,
            large: true,
            sell: true,
        },

        {
            id: '837217bc-c290-4cd5-b423-a96a04d091d1',
            category: 'apartments',
            address: 'detailed_address_nice',
            title: 'detailed_title',
            subtitle: 'detailed_subtitle',
            description: 'detailed_description',
            descriptionFull: [
                'detailed_second_paragraph_first',
                'detailed_second_paragraph_second',
                'detailed_second_paragraph_third',
            ],
            img: 'assets/images/rent/rent_second_4.jpg',
            imageFull: 'assets/images/sell/sell_full_4.jpg',
            price: 2600000,
            area: 134.73,
            exclusive: true,
            sell: true,
        },
        {
            id: '8b8f9e17-a952-451a-b4b2-94c3bd4ffe43',
            category: 'apartments',
            address: 'detailed_address_cannes',
            title: 'detailed_title',
            subtitle: 'detailed_subtitle',
            description: 'detailed_description',
            descriptionFull: [
                'detailed_second_paragraph_first',
                'detailed_second_paragraph_second',
                'detailed_second_paragraph_third',
            ],
            img: 'assets/images/rent/rent_second_1.jpg',
            imageFull: 'assets/images/rent/rent_second_full_1.jpg',
            price: 1000000,
            area: 104.73,
            large: true,
            choice: true,
            rent: true,
        },
        {
            id: '634c5b49-e57d-47c8-b580-e08ed591feb8',
            category: 'apartments',
            address: 'detailed_address_nice',
            title: 'detailed_title',
            subtitle: 'detailed_subtitle',
            description: 'detailed_description',
            descriptionFull: [
                'detailed_second_paragraph_first',
                'detailed_second_paragraph_second',
                'detailed_second_paragraph_third',
            ],
            img: 'assets/images/rent/rent_second_2.jpg',
            imageFull: 'assets/images/rent/rent_second_full_2.jpg',
            price: 1600000,
            area: 114.73,
            exclusive: true,
            rent: true,
        },
        {
            id: '4f31d36a-eea4-4927-8a45-64e1ad28271b',
            category: 'apartments',
            address: 'detailed_address_cannes',
            title: 'detailed_title',
            subtitle: 'detailed_subtitle',
            description: 'detailed_description',
            descriptionFull: [
                'detailed_second_paragraph_first',
                'detailed_second_paragraph_second',
                'detailed_second_paragraph_third',
            ],
            img: 'assets/images/rent/rent_second_3.jpg',
            imageFull: 'assets/images/rent/rent_second_full_3.jpg',
            price: 2000000,
            area: 124.73,
            large: true,
            rent: true,
        },

        {
            id: '084e752e-029e-47cd-9578-79274de796d6',
            category: 'apartments',
            address: 'detailed_address_nice',
            title: 'detailed_title',
            subtitle: 'detailed_subtitle',
            description: 'detailed_description',
            descriptionFull: [
                'detailed_second_paragraph_first',
                'detailed_second_paragraph_second',
                'detailed_second_paragraph_third',
            ],
            img: 'assets/images/rent/rent_second_4.jpg',
            imageFull: 'assets/images/rent/rent_second_full_4.jpg',
            price: 2600000,
            area: 134.73,
            exclusive: true,
            rent: true,
        },
    ];

    ngOnInit() {
        this.updateCurrentId();
    }

    private updateCurrentId() {
        this.currentLink = this.router.url || '/';

        this.route.params.subscribe((params) => {
            this.currentId = params['sellId'] || params['rentId'];

            if (!this.isСurrentObjectExists(this.currentId)) {
                this.router.navigate(['/not-found']);
            }
        });
    }

    isСurrentObjectExists(id: string) {
        return (this.currentObject =
            this.mockData.find((item) => item.id === id) || null);
    }
}
