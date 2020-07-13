import React, { createContext, FunctionComponent, useEffect, useState } from 'react';
import { RestStatus } from './api-utils';
import { useGroupId } from './groupid-hook';
import { fetchRestFixtureslist } from './api';
import {RestFixtureslist} from "./fixtureslist";

export const fixtureslistContext = createContext<RestFixtureslist>({
    status: RestStatus.NotLastedYet,
});

export const FixtureslistProvider: FunctionComponent = (props) => {
    const groupId = useGroupId();
    const [restFixtureslist, setRestFixtureslist] = useState<
        RestFixtureslist
    >({ status: RestStatus.NotLastedYet });

    useEffect(() => {
        if (groupId) {
            setRestFixtureslist({
                status: RestStatus.NotLastedYet,
            });
            const fetchRestFixtureslistAndSetState = async () => {
                setRestFixtureslist(await fetchRestFixtureslist(groupId));
            };
            fetchRestFixtureslistAndSetState();
        }
    }, [groupId]);

    const Provider = fixtureslistContext.Provider;
    return <Provider value={restFixtureslist}>{props.children}</Provider>;
};
