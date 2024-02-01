import { single } from 'rxjs';

export interface SwiperSlidesArray {
    id?: number;
    address?: string;
    title?: string;
    description?: string;
    img?: string;
    choice?: boolean;
    exclusive?: boolean;
    sell?: boolean;
    article?: boolean;
    news?: boolean;
    addedBottomClass?: boolean;
    link?: boolean;
    rent?: boolean;
    single?: boolean;
}

export type SortOrder = 'asc' | 'desc' | null;

export type HouseType = 'apartments' | 'house' | 'float' | null;

export interface SellOrRent extends SwiperSlidesArray {
    category: HouseType;
    price: number;
    area: number;
    address: string;
    large?: boolean;
}
