import * as React from 'react';
import PlayerSvg from "./PlayerSvg";


interface Props {
    substitutes: string[];
}

export const Substitutes: React.FunctionComponent<Props> = props => {

    const substitutesList = props.substitutes;

    return (
        <>
            {substitutesList.map((substituteName) => {
                return (
                    <div className="scaling-svg-container" key={substituteName}>
                        <svg className="scaling-svg" viewBox="0 0 400 60">
                            <PlayerSvg
                                xposition={50}
                                yposition={20}
                                name={substituteName}
                            >
                            </PlayerSvg>
                        </svg>
                    </div>
                );
            })}
        </>
    )
};