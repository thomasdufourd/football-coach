import {FRONTEND_API_PATH} from '../constants';
import { getRestStatus, RestStatus } from './api-utils';
import {
    RestPlayerslist
} from './playerslist';

const playersListPath = (groupId: string) =>
    `${FRONTEND_API_PATH}/players`; // TODO: use groupId

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
