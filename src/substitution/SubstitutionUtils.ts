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

export const makeNewSubstitution = (playerName: string, substitution: Substitution): Substitution => {
    console.log(`[DEBUG] substitution in='${substitution.in}' out='${substitution.out} status='${substitution.status}`);
    switch (substitution.status) {
        case 'Empty':
            substitution = {
                in: playerName,
                out: '',
                status: 'In'
            };
            break;
        case 'In':
            if (playerName !== substitution.in) {
                substitution = {
                    in: substitution.in,
                    out: playerName,
                    status: 'Ready'
                };
            } else {
                substitution = emptySubstitution;
            }
            break;
        case 'Ready':
            substitution = emptySubstitution;
            break;
        default:
            break;
    }
    console.log(`[DEBUG][addToSubstitution()] --> substitution in='${substitution.in}' out='${substitution.out} status='${substitution.status}`);
    return substitution;
};
