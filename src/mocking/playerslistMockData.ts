import {Player, PositionOnPitch} from '../api/playerslist';


const createPlayerslist1 = (): Player[] => {
    return [
        {
            id: '1',
            name: 'AugustB',
            position: PositionOnPitch.CENTER_BACK,
            started: '2016'
        },
        {
            id: '2',
            name: 'Theo',
            position: PositionOnPitch.STRIKER,
            started: '2013'
        },
        {
            id: '3',
            name: 'Tobias',
            position: PositionOnPitch.GOAL_KEEPER,
            started: '2013'
        },
        {
            id: '4',
            name: 'Storm',
            position: PositionOnPitch.MIDFIELD,
            started: '2014'
        },
        {
            id: '4',
            name: 'Max',
            position: PositionOnPitch.CENTER_BACK,
            started: '2018'
        },
    ];
};

const createPlayerslist2 = (): Player[] => {
    return [
        {
            id: '1',
            name: 'Sara',
            position: PositionOnPitch.CENTER_BACK,
            started: '2015'
        },
        {
            id: '2',
            name: 'Erle',
            position: PositionOnPitch.STRIKER,
            started: '2013'
        },
    ];
};


export const getPlayerslistMock = (groupId: String) => {
    return [
        {
            id: '1',
            name:"Tobias",
            started:'2013',
            position:"GK"
        }
        ]
    /*
    switch (groupId) {
        case 'G2008':
            return createPlayerslist1();
        default:
            return createPlayerslist2();
    }*/
};
