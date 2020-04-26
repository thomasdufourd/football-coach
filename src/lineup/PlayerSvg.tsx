import * as React from 'react';

interface Props {
    name: string;
    xposition: Number;
    yposition: Number;
}


const PlayerSvg: React.FunctionComponent<Props> = props => {

    const {xposition, yposition} = props;
    let position: string = `translate(${xposition}  ${yposition})`;


    return (
        <svg id="playerX"
             xmlns="http://www.w3.org/2000/svg" version="1.1">
            <desc>Simple representation of a player</desc>

            <circle cx="0" cy="0" r="10" transform={position}
                    fill="grey" stroke="black" strokeWidth="5"
                    onClick={event => {
                        console.log(`Event ${event.type} on ${props.name}`)
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