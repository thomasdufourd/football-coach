import {
    __3_3_2, __3_3_2_til__4_3_1_conversion_table,
    __4_3_1,
    __4_3_1_til__3_3_2_conversion_table,
    getCoordinatesFromRole,
    PlayerWithRole,
    Role,
    TacticalSchema
} from "../domain/PlayerUtils";

export interface SvgDrawyablePlayer {
    name: string;
    coordinates: SVGCoordinates
}

export interface SVGCoordinates {
    xposition: number;
    yposition: number;
}

export const emptyPlayerOnFieldListAtStart: PlayerWithRole[] =  [];

export const convertRole = (role: Role, schemaOrigin: TacticalSchema, schemaTarget: TacticalSchema): Role => {
    switch (schemaOrigin) {
        case __4_3_1:
            if (schemaTarget === __3_3_2) {
                // @ts-ignore
                return __4_3_1_til__3_3_2_conversion_table.has(role) ?
                    __4_3_1_til__3_3_2_conversion_table.get(role)
                    : role;
            } else {
                return role;
            }
        case __3_3_2:
            if (schemaTarget === __4_3_1) {
                // @ts-ignore
                return __3_3_2_til__4_3_1_conversion_table.has(role) ?
                    __3_3_2_til__4_3_1_conversion_table.get(role)
                    : role;
            } else {
                return role;
            }
        default:
            return role;
    }
}

export const applySchema = (
    startingPlayersList: PlayerWithRole[],
    schemaOrigin: TacticalSchema,
    schemaTarget: TacticalSchema): PlayerWithRole[]  => {
    console.log(`[DEBUG] ----> applySchema has been called from schema ${schemaOrigin.name} to schema ${schemaTarget.name}`);
    return startingPlayersList.map( (player) => {
        let previousRole = player.role;
        player.role = convertRole(player.role, schemaOrigin, schemaTarget);
        console.log(`[DEBUG] ----> converted player ${player.playerName} 
         with previous role ${previousRole} to role ${player.role}`);
        return player;
    });
};

export const mapToSvgPlayers = (playersWithRole: PlayerWithRole[], schema: TacticalSchema): SvgDrawyablePlayer[] => {
    return playersWithRole.map((playerOnField) => {
        return {
            name: playerOnField.playerName,
            coordinates: getCoordinatesFromRole(playerOnField.role)
        }
    });
};
