import { RestResource } from './api-utils';

export interface Fixture {
    home: string;
    away: string;
    date: string;
    arena: string;
    surface: string;
    location: string;
}

export type RestFixtureslist = RestResource<Fixture[]>;
