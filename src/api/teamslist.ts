import { RestResource } from './api-utils';

export interface Team {
    name: string;
    teamlead: string;
    coaches: string[];
    type: string;
    tournament: string;
    rank: number;
}

export type RestTeamslist = RestResource<Team[]>;
