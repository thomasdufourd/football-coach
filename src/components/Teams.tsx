import * as React from 'react';

interface Props {
    group: string;
}

const Teams: React.FunctionComponent<Props> = (props) => {
    return (
        <h1>Teams for {props.group}</h1>
    );

};

export default Teams;