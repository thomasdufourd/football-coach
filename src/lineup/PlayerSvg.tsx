import * as React from 'react';
import {useContext} from 'react';
import {SubstitutionContext} from "../substitution/SubstitutionProvider";
import {getNewSubstitutionWithSelectedPlayer, isInSubstitution} from "../substitution/SubstitutionUtils";

interface Props {
    name: string;
    xposition: Number;
    yposition: Number;
}


const PlayerSvg: React.FunctionComponent<Props> = props => {

    const {getSubstitution, setSubstitution} = useContext(SubstitutionContext);

    const {xposition, yposition} = props;
    let position: string = `translate(${xposition}  ${yposition})`;


    return (
        <svg id="playerX"
             xmlns="http://www.w3.org/2000/svg" version="1.1">
            <desc>Simple representation of a player</desc>

            <circle cx="0" cy="0" r="10" transform={position}
                    fill={isInSubstitution(props.name, getSubstitution())? "red" : "grey"}
                    onClick={event => {
                        setSubstitution(getNewSubstitutionWithSelectedPlayer(props.name, getSubstitution()));
                        console.log(`Event ${event.type} on ${props.name}`);
                    }}
            />
            <text x="0" y="25"
                  transform={position}
                  textAnchor="middle"
                  stroke="#fffffe"
                  strokeWidth="0px"
                  dy=".1em"
            >
                {props.name}
            </text>
        </svg>
    );
};

export default PlayerSvg;