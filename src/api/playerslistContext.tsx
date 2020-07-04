import React, { createContext, FunctionComponent, useEffect, useState } from 'react';
import { RestPlayerslist } from './playerslist';
import { RestStatus } from './api-utils';
import { useGroupId } from './orgnr-hook';
import { fetchRestPlayerslist } from './api';

export const playerslistContext = createContext<RestPlayerslist>({
    status: RestStatus.NotLastedYet,
});

export const PlayerslistProvider: FunctionComponent = (props) => {
    const groupId = useGroupId();
    const [restPlayerslist, setRestPlayerslist] = useState<
        RestPlayerslist
    >({ status: RestStatus.NotLastedYet });

    useEffect(() => {
        if (groupId) {
            setRestPlayerslist({
                status: RestStatus.NotLastedYet,
            });
            const fetchRestPlayerslistAndSetState = async () => {
                setRestPlayerslist(await fetchRestPlayerslist(groupId));
            };
            fetchRestPlayerslistAndSetState();
        }
    }, [groupId]);

    const Provider = playerslistContext.Provider;
    return <Provider value={restPlayerslist}>{props.children}</Provider>;
};
