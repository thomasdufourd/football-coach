import fetchMock from 'fetch-mock';
import { getPlayerslistMock } from './playerslistMockData';

const PLAYERSLIST_API_MOCK = true;

// TODO: delete mocking and use this instead
//  ---> https://kentcdodds.com/blog/stop-mocking-fetch

if (PLAYERSLIST_API_MOCK) {
    fetchMock.get(
        'express:/football-coach/api/players',
        (url) => {
            // TODO add groupId to URL
            const groupId = url.match(/[0-9]{9}/)![0];

            if (groupId === '101010101') {
                return 500;
            }
            if (groupId === '100100100') {
                return 403;
            }
            return getPlayerslistMock(groupId);
        },
        {
            delay: 1000,
        }
    );
}

fetchMock.spy();
