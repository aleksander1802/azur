export interface SwiperSlidesArray {
    id?: string;
    address?: string;
    title?: string;
    description?: string;
    descriptionFull?: string[];
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

export interface DetailedSellOrRent
    extends Pick<SwiperSlidesArray, 'title' | 'img'> {}

export interface ObjectDetails {
    common: Partial<ObjectCommonDetails>;
    services: string[];
    distance: Partial<ObjectDistanceDetails>;
    description: string;
}

export interface ObjectCommonDetails {
    area: number;
    rooms: number;
    heating: string;
    hot_water: string;
    state: string;
    landmarks: string;
    view: string;
}

export interface ObjectDistanceDetails {
    airport: string;
    bus_stop: string;
    sea: string;
    beach: string;
    highway: string;
    city_center: string;
    park: string;
    seaport: string;
}
