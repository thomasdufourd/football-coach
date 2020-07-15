import * as React from 'react';
import {PlayerWithRole, TacticalSchema} from "../domain/PlayerUtils";
import {mapToSvgPlayers} from "./LineupUtils";


interface Props {
    playersOnField: PlayerWithRole[],
    schema: TacticalSchema
}

const StaticPitchSvg: React.FunctionComponent<Props> = (props: Props) => {

    const players = mapToSvgPlayers(props.playersOnField, props.schema);

    return (
        <svg id="svg_pitch" width="1000" height="585" viewBox="0 0 1000 585">
            <rect id="svg_bg_rect" className="svg-bg-rect" x="0" y="0" width="1000" height="585" fill="#1384CB"
                  stroke="#ffffff">
            </rect>
            <g id="board_svg_markup">
                <path d="M449.90000000000003 105.2415 A 122.80000000000001 122.80000000000001, 0, 0, 0, 550.0999999999999 105.2415
			M422.5 392.47650000000004 A 135.2 135.2, 0, 0, 1, 577.5 392.47650000000004"
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeWidth="2">
                </path>
                <ellipse cx="500" cy="90.9675" rx="2.5" ry="0.8775000000000001" fill="#ffffff" stroke="#ffffff"
                         strokeLinecap="square" strokeWidth="2">
                </ellipse>
                <ellipse cx="500" cy="219.0825" rx="79.10000000000001" ry="39.195" fill="none" stroke="#ffffff"
                         strokeLinecap="square" strokeWidth="2">
                </ellipse>
                <ellipse cx="500" cy="216.7425" rx="4.91" ry="2.34" fill="#ffffff" stroke="#ffffff"
                         strokeLinecap="square"
                         strokeWidth="2">
                </ellipse>
                <ellipse cx="500" cy="432.02250000000004" rx="4.83" ry="3.1005" fill="#ffffff" stroke="#ffffff"
                         strokeLinecap="square" strokeWidth="2">
                </ellipse>
                <line x1="259.90000000000003" y1="216.333" x2="740.0999999999999" y2="216.333" fill="none"
                      stroke="#ffffff"
                      strokeLinecap="square" strokeWidth="2">
                </line>
                <polygon points="319.1 65.8125, 138.2 519.1875, 861.8 519.1875, 680.9 65.8125" fill="none"
                         stroke="#ffffff"
                         strokeLinecap="square" strokeWidth="2">
                </polygon>
                <polygon points="379.5 65.8125, 620.5 65.8125, 630.9000000000001 105.2415, 369.09999999999997 105.2415"
                         fill="none" stroke="#ffffff" strokeLinecap="square" strokeWidth="2">
                </polygon>
                <polygon points="442.3 65.8125, 557.7 65.8125, 559.4000000000001 78.858, 440.59999999999997 78.858"
                         fill="none" stroke="#ffffff" strokeLinecap="square" strokeWidth="2">
                </polygon>
                <polygon
                    points="444.29999999999995 529.4835, 444.29999999999995 498.4785, 555.7 498.4785, 555.7 529.4835"
                    fill="#ffffff" fillOpacity=".35" stroke="#ffffff" strokeLinecap="square"
                    strokeWidth="2">
                </polygon>
                <polygon
                    points="444.29999999999995 498.4785, 446.7 484.08750000000003,553.3 484.08750000000003, 555.7 498.4785"
                    fill="#ffffff" fillOpacity=".35" stroke="#ffffff" strokeLinecap="square"
                    strokeWidth="2">
                </polygon>
                <polygon
                    points="444.29999999999995 529.4835, 444.29999999999995 498.4785, 446.7 484.08750000000003, 446.7 518.0175"
                    fill="#ffffff" fillOpacity=".35" stroke="#ffffff" strokeLinecap="square"
                    strokeWidth="2">
                </polygon>
                <polygon points="555.7 529.4835, 555.7 498.4785, 553.3 484.08750000000003, 553.3 518.0175"
                         fill="#ffffff"
                         fillOpacity=".35" stroke="#ffffff" strokeLinecap="square" strokeWidth="2">
                </polygon>
                <polyline points="472.9 65.8125, 472.9 48.1455, 527.1 48.1455, 527.1 65.8125" fill="#ffffff"
                          fillOpacity=".35" stroke="#ffffff" strokeLinecap="square" strokeWidth="2">
                </polyline>
                <polyline points="259.5 519.1875, 293.2 392.47650000000004, 706.8 392.47650000000004, 740.5 519.1875"
                          fill="none" stroke="#ffffff" strokeLinecap="square" strokeWidth="2">
                </polyline>
                <polyline
                    points="385.29999999999995 519.1875, 391.7 469.28700000000003, 608.3 469.28700000000003, 614.7 519.1875"
                    fill="none" stroke="#ffffff" strokeLinecap="square" strokeWidth="2">
                </polyline>
                <polyline points="446.7 518.0175, 446.7 484.08750000000003, 553.3 484.08750000000003, 553.3 518.0175"
                          fill="none" stroke="#ffffff" strokeLinecap="square" strokeWidth="4">
                </polyline>
                {
                    players.map((player, index) => {
                        let position: string = `translate(${player.coordinates.xposition} ${player.coordinates.yposition})`;

                        return (
                            <svg key={`player-on-pitch-at-${index}`}>
                                xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <desc>Simple representation of a player</desc>
                                <circle cx="0" cy="0" r="10" transform={position}
                                        fill="grey"
                                        stroke="black"
                                        strokeWidth="5"
                                />
                                <text x="0" y="25"
                                      pointerEvents="none"
                                      transform={position}
                                      textAnchor="middle"
                                      stroke="#fffffe"
                                      strokeWidth="0px"
                                      dy=".1em"
                                >
                                    {player.name}
                                </text>
                            </svg>
                        )
                    })
                }
            </g>
            <g id="shape_shadow"></g>
        </svg>
    );
};

export default StaticPitchSvg;