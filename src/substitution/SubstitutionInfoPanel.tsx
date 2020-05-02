import * as React from 'react';
import {FunctionComponent, useContext} from 'react';
import {SubstitutionContext} from "./SubstitutionProvider";

export const SubstitutionInfoPanel: FunctionComponent = () => {
    const {getSubstitution} = useContext(SubstitutionContext);


    return (
        <p>Current substitution: in='{getSubstitution().in}' out='{getSubstitution().out}'
            status='{getSubstitution().status}'</p>
    );
};