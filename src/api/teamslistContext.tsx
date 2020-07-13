import React, { createContext, FunctionComponent, useEffect, useState } from 'react';
import { RestStatus } from './api-utils';
import { useGroupId } from './groupid-hook';
import { fetchRestTeamslist } from './api';
import {RestTeamslist} from "./teamslist";

export const teamslistContext = createContext<RestTeamslist>({
    status: RestStatus.NotLastedYet,
});

export const TeamslistProvider: FunctionComponent = (props) => {
    const groupId = useGroupId();
    const [restTeamslist, setRestTeamslist] = useState<
        RestTeamslist
    >({ status: RestStatus.NotLastedYet });

    useEffect(() => {
        if (groupId) {
            setRestTeamslist({
                status: RestStatus.NotLastedYet,
            });
            const fetchRestTeamslistAndSetState = async () => {
                setRestTeamslist(await fetchRestTeamslist(groupId));
            };
            fetchRestTeamslistAndSetState();
        }
    }, [groupId]);

    const Provider = teamslistContext.Provider;
    return <Provider value={restTeamslist}>{props.children}</Provider>;
};
