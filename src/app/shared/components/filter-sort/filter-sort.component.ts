import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HouseType, SellOrRent } from 'src/app/shared/models/home.types';
import { SharedModule } from '../../shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExclusiveSvgComponent } from '../exclusive-svg/exclusive-svg.component';
import { ChoiceSvgComponent } from '../choice-svg/choice-svg.component';

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
    @Input() title = ' на продажу';
    @Input() cities: string[] = [];
    @Input() data: SellOrRent[] = [];

    filteredDataLength = 0;

    selectedHouseType: HouseType = 'apartments';
    selectedCity: string = '';
    selectedSortBy: string = 'price_asc';
    sortDirection: 'asc' | 'desc' = 'asc';

    updateFilteredDataLength(length: number) {
        this.filteredDataLength = length;
    }

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
