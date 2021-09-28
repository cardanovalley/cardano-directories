export interface Store {
    name: string,
    country: string,
    country_name: string;
    state: string,
    address: string,
    website: string,
    picture: string,
    googlemaps_link: string,
}

export interface Pagination {
    number: number,
    address: string,
}