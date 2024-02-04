import { single } from 'rxjs';

export interface SwiperSlidesArray {
    id?: string;
    address?: string;
    title?: string;
    description?: string;
    descriptionFull?: string;
    img?: string;
    imageFull?: string;
    choice?: boolean;
    exclusive?: boolean;
    sell?: boolean;
    rent?: boolean;
    article?: boolean;
    news?: boolean;
    addedBottomClass?: boolean;
    link?: boolean;
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
    title: string;
    subtitle?: string;
}
