import {FRONTEND_API_PATH} from '../constants';
import { getRestStatus, RestStatus } from './api-utils';
import {
    Player,
    RestPlayerslist
} from './playerslist';
import {RestFixtureslist} from "./fixtureslist";
import {RestTeamslist} from "./teamslist";

const playersListPath = (groupId: string) =>
    `${FRONTEND_API_PATH}/players`; // TODO: use groupId

const teamsListPath = (groupId: string) =>
    `${FRONTEND_API_PATH}/teams`; // TODO: use groupId

const fixturesListPath = (groupId: string) =>
    `${FRONTEND_API_PATH}/fixtures`; // TODO: use groupId

const lineupPath = (teamId: string) =>
    `${FRONTEND_API_PATH}/lineup`; // TODO: use teamId

export const fetchRestTeamslist = async (
    groupId: string
): Promise<RestTeamslist> => {
    const response = await fetch(teamsListPath(groupId), {
        method: 'GET',
        credentials: 'include',
    });

    console.log(response);
    const restStatus = getRestStatus(response.status);
    if (restStatus === RestStatus.Success) {
        return {
            status: RestStatus.Success,
            data: await response.json().then((data) => {
                console.log(data);
                return data;
            }),
        };
    }
    return {
        status: restStatus,
    };
};

export const fetchRestFixtureslist = async (
    groupId: string
): Promise<RestFixtureslist> => {
    const response = await fetch(fixturesListPath(groupId), {
        method: 'GET',
        credentials: 'include',
    });

    console.log(response);
    const restStatus = getRestStatus(response.status);
    if (restStatus === RestStatus.Success) {
        return {
            status: RestStatus.Success,
            data: await response.json().then((data) => {
                console.log(data);
                return data;
            }),
        };
    }
    return {
        status: restStatus,
    };
};

export const fetchRestPlayerslist = async (
    groupId: string
): Promise<RestPlayerslist> => {
    const response = await fetch(playersListPath(groupId), {
        method: 'GET',
        credentials: 'include',
    });

    console.log(response);
    const restStatus = getRestStatus(response.status);
    if (restStatus === RestStatus.Success) {
        return {
            status: RestStatus.Success,
            data: await response.json().then((data) => {
                console.log(data);
                return data;
            }),
        };
    }
    return {
        status: restStatus,
    };
};

export const updatePlayer = async (
    groupId: string,
    player: Player
): Promise<RestPlayerslist> => {
    const response = await fetch(playersListPath(groupId), {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(player),
        credentials: 'include',
    });

    console.log(response);
    const restStatus = getRestStatus(response.status);
    if (restStatus === RestStatus.Success) {
        return {
            status: RestStatus.Success,
            data: await response.json().then((data) => {
                console.log(data);
                return data;
            }),
        };
    }
    return {
        status: restStatus,
    };
};

export const fetchRestLineup = async (
    teamId: string
): Promise<RestTeamslist> => {
    const response = await fetch(lineupPath(teamId), {
        method: 'GET',
        credentials: 'include',
    });

    console.log(response);
    const restStatus = getRestStatus(response.status);
    if (restStatus === RestStatus.Success) {
        return {
            status: RestStatus.Success,
            data: await response.json().then((data) => {
                console.log(data);
                return data;
            }),
        };
    }
    return {
        status: restStatus,
    };
};
