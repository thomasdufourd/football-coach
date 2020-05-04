import * as React from 'react';
import {createContext, FunctionComponent, useState} from 'react';
import {emptySubstitution, Substitution} from "./SubstitutionUtils";

interface Props {
    children: React.ReactNode
}

export type Context = {
    substitution: Substitution;
    setSubstitution: (substitusjon: Substitution) => void;
    getSubstitution: () => Substitution;
}

export const SubstitutionContext = createContext<Context>({} as Context);


export const SubstitutionProvider: FunctionComponent<Props> = ({children}: Props) => {

    const [substitution, setSubstitution] = useState<Substitution>(emptySubstitution);

    const updateSubstitution = (newSubstitution: Substitution) => {
        setSubstitution(newSubstitution);
    };

    const fetchSubstitution = (): Substitution => {
        return substitution;
    };

    let defaultContext =  {
        substitution: emptySubstitution,
        setSubstitution: updateSubstitution,
        getSubstitution: fetchSubstitution,
    };

    return (
        <SubstitutionContext.Provider value={defaultContext}>
            {children}
        </SubstitutionContext.Provider>
    );
};
