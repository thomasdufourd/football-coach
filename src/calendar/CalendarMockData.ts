const today: Date = new Date();

export const trainingSessions = [
    {
        type: 'Training session',
        title: 'Trening #1',
        start: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3, 18, 0),
        end: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3, 18, 0),
        details: ''
    },
    {
        type: 'Training session',
        title: 'Trening #2',
        start: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 18, 0),
        end: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 18, 0),
        details: ''
    },
];

export const regularSeason = [
    {
        type: 'Regular season (Home)',
        title: 'Kamp',
        start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 19, 0),
        end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 20, 15),
        details: 'LTG12-1 - Grüner 3'
    },
    {
        type: 'Regular season (Away)',
        title: 'Kamp',
        start: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 19, 0),
        end: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 20, 15),
        details: 'H/L Tiger - LTG12-2'
    }
];

export const otherCompetitions = [
    {
        type: 'Cup',
        title: 'Caltex Cup',
        allDay: true,
        start: new Date(today.getFullYear(), today.getMonth(), today.getDate() +2, 10, 0),
        end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3, 17, 0),
        details: ''
    }
];

export const otherEvents = [
    {
        type: 'Other event',
        title: 'Video session',
        allDay: true,
        start: new Date(today.getFullYear(), today.getMonth(), today.getDate() +10, 17, 0),
        end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10, 19, 0),
        details: ''
    }
];

