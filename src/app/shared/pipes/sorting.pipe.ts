import { Pipe, PipeTransform } from '@angular/core';
import { SellOrRent } from '../models/home.types';

@Pipe({
    name: 'sorting',
    pure: true,
})
export class SortingPipe implements PipeTransform {
    private sortDirection: 'asc' | 'desc' = 'asc';

    transform(value: SellOrRent[], sortBy: string): SellOrRent[] {
        const sortedArray = value.slice();

        this.updateSortDirection(sortBy);

        sortedArray.sort((a, b) => {
            if (sortBy === 'price_asc' || sortBy === 'price_desc') {
                return this.compareValues(a.price, b.price);
            } else if (sortBy === 'area_asc' || sortBy === 'area_desc') {
                return this.compareValues(a.area, b.area);
            }
            return 0;
        });

        return sortedArray;
    }

    private updateSortDirection(sortBy: string) {
        this.sortDirection = sortBy.includes('asc') ? 'asc' : 'desc';
    }

    private compareValues(a: number, b: number): number {
        if (this.sortDirection === 'asc') {
            return a - b;
        }
        return b - a;
    }
}
