import {PlayerWithRole} from "../domain/PlayerUtils";

export type SubstitutionStatus = 'Empty' | 'In' | 'Ready'

export interface Substitution {
    in: string;
    out: string;
    status: SubstitutionStatus;
}
export const emptySubstitution:Substitution =  {in: '', out: '', status: "Empty"};

export const isInSubstitution = (playerName: string, substitution: Substitution):boolean => {
    const isInSubstitution = (substitution.in === playerName) ||
        (substitution.out === playerName);
    return isInSubstitution;
};

export const getNewSubstitutionWithSelectedPlayer = (playerName: string, substitution: Substitution) : Substitution => {
    switch (substitution.status) {
        case "Empty":
            return {
                status: "In",
                in: playerName,
                out: ''
            };
        case "In":
            if ( isInSubstitution(playerName, substitution) ) {
                return emptySubstitution;
            } else {
                return {
                    status: "Ready",
                    in: substitution.in,
                    out: playerName
                };
            }
        default:
            return emptySubstitution;
    }
};

export const applySubstitutionToStartingPlayersListAndSubstitutes =
    (startingPlayersList: PlayerWithRole[], substitutes: string[], substitution: Substitution):
        { startingPlayersList: PlayerWithRole[], substitutes: string[] } => {


        // 1- both players are on pitch ---> TODO: swap (do nothing for the moment)
        // 2- one is one the pitch and the other is substitutes
        startingPlayersList.forEach(p => {
                if (p.playerName === substitution.out) {
                    p.playerName = substitution.in;
                }
            }
        );
        if (substitutes.indexOf(substitution.in) !== -1) {
            substitutes[substitutes.indexOf(substitution.in)] = substitution.out;
        }

        return {startingPlayersList, substitutes};
    };

export const isInStartingPlayersList = (startingPlayersList: PlayerWithRole[], playerName: string): boolean => {
    let isFound:boolean = false;

    startingPlayersList.forEach( p => { if (p.playerName === playerName) {
            isFound = true;
        }}
    );

    return isFound;
};

export const isInSubstitutesList = (substitutesList: string[], playerName: string): boolean => {
    return substitutesList.indexOf(playerName) !== -1;
};
