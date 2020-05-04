import * as React from 'react';
import SubstitutePlayerSvg from "./SubstitutePlayerSvg";


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
                            <SubstitutePlayerSvg
                                xposition={50}
                                yposition={20}
                                name={substituteName}
                            >
                            </SubstitutePlayerSvg>
                        </svg>
                    </div>
                );
            })}
        </>
    )
};