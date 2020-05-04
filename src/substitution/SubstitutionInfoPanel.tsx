import * as React from 'react';
import {FunctionComponent, useContext} from 'react';
import {SubstitutionContext} from "./SubstitutionProvider";
import {Button} from "react-bootstrap";
import {
    applySubstitutionToStartingPlayersListAndSubstitutes,
    emptySubstitution,
    isInSubstitutesList
} from "./SubstitutionUtils";
import {Lineup, PlayerWithRole} from "../domain/PlayerUtils";

interface Props {
    startingPlayersList: PlayerWithRole[];
    setStartingPlayersList: (startingPlayersList: PlayerWithRole[]) => void;
    substitutes: string[];
    setSubstitutes: (substitutes: string[]) => void;

}

export const SubstitutionInfoPanel: FunctionComponent<Props> = ( props) => {
    const {getSubstitution, setSubstitution} = useContext(SubstitutionContext);


    return (
        <>
            <p>Comming substitution: in='{getSubstitution().in}' out='{getSubstitution().out}'
                status='{getSubstitution().status}'
            </p>

            <Button
                variant="dark"
                disabled={getSubstitution().status !== "Ready" }
                onClick={() => {
                    let isBothplayersAreSubstitutes:boolean =
                        (isInSubstitutesList(props.substitutes, getSubstitution().in)
                        && isInSubstitutesList(props.substitutes, getSubstitution().out));
                    if (! isBothplayersAreSubstitutes){
                        const returnValue =
                            applySubstitutionToStartingPlayersListAndSubstitutes(
                                props.startingPlayersList,
                                props.substitutes,
                                getSubstitution()
                            );
                        console.dir(`Substitutes? ${returnValue.substitutes}`);
                        console.dir(`startingPlayersList? ${returnValue.startingPlayersList}`);
                        props.setStartingPlayersList(returnValue.startingPlayersList);
                        props.setSubstitutes(returnValue.substitutes);
                    }
                    setSubstitution(emptySubstitution);
                }}>
                Confirm substitution
            </Button>
        </>

    );
};