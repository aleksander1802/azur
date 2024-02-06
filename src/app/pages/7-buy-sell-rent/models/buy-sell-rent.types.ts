export type ActiveTab = 'buy' | 'sell' | 'rent';

export interface Advantages {
    buy: AdvantagesCommon;
    rent: AdvantagesCommon;
    sell: AdvantagesCommon;
}

export interface AdvantagesCommon {
    title: string;
    advantages: AdvantagesData;
}

export interface AdvantagesData {
    first: AdvantagesItem;
    second: AdvantagesItem;
    third: AdvantagesItem;
}

export interface AdvantagesItem {
    number: number;
    symbol: string;
    subtitle?: string;
    description: string;
}

export interface RealEstate {
    title: string;
    description: string;
    imageUrl: string;
    actionLink: string;
}
