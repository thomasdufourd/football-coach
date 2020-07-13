import { RestResource } from './api-utils';

export interface Fixture {
    date: string;
    time: string;
    home: string;
    away: string;
    location: string;
}

export type RestFixtureslist = RestResource<Fixture[]>;
