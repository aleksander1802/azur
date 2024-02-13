import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SellOrRent, HouseType } from '../../models/home.types';
import { SharedModule } from '../../shared.module';
import { ChoiceSvgComponent } from '../choice-svg/choice-svg.component';
import { ExclusiveSvgComponent } from '../exclusive-svg/exclusive-svg.component';

@Component({
    selector: 'app-filter-sort',
    standalone: true,
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        ExclusiveSvgComponent,
        ChoiceSvgComponent,
    ],

    templateUrl: './filter-sort.component.html',
    styleUrl: './filter-sort.component.scss',
})
export class FilterSortComponent {
    @Input() title = '';
    @Input() cities: string[] = [];
    @Input() data: SellOrRent[] = [];

    selectedHouseType: HouseType = 'apartments';
    selectedCity: string = '';
    selectedSortBy: string = 'price_asc';
    sortDirection: 'asc' | 'desc' = 'asc';

    updateFilters(houseType: HouseType, city: string, sort: string) {
        if (sort === this.selectedSortBy) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortDirection = 'asc';
        }

        this.selectedHouseType = houseType;
        this.selectedCity = city;
        this.selectedSortBy = sort;
    }
}
