import { Pipe, PipeTransform } from '@angular/core';
import { SellOrRent, HouseType } from '../models/home.types';

@Pipe({
    name: 'filtering',
    pure: true,
})
export class FilteringPipe implements PipeTransform {
    transform(
        value: SellOrRent[],
        houseType: HouseType,
        city: string
    ): SellOrRent[] {
        return value.filter((item) => {
            const matchesHouseType = !houseType || item.category === houseType;
            const matchesCity =
                !city ||
                item.address.toLowerCase().includes(city.toLowerCase());
            return matchesHouseType && matchesCity;
        });
    }
}
