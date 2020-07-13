// Teams at fotball.no
// https://www.fotball.no/fotballdata/lag/hjem/?fiksId=7223 G12-1
// https://www.fotball.no/fotballdata/lag/hjem/?fiksId=39896 G12-2
// https://www.fotball.no/fotballdata/lag/hjem/?fiksId=173306 G12-3 (7-er)
// https://www.fotball.no/fotballdata/lag/hjem/?fiksId=189583 G12-4

import {Fixture, Team} from "./RegularSeason";

export const teamsForRegularSeasonG2008: Team[] = [
    {
        name: 'Lille Tøyen G12 1',
        teamlead: 'Pål',
        coaches: ['Pål', 'Patrick'],
        tournament: 'Gutter 12 år 9er 2. div. avd. 05',
        type: '9-er',
        rank: 1
    },
    {
        name: 'Lille Tøyen G12 2',
        teamlead: 'Bente',
        coaches: ['Bente', 'Bendik'],
        tournament: 'Gutter 12 år 9er 3. div. avd. 03',
        type: '9-er',
        rank: 2
    },
    {
        name: 'Lille Tøyen G12 3',
        teamlead: 'Lars',
        coaches: ['Thomas'],
        tournament: 'Gutter 12 år 7er avd. 02',
        type: '7-er',
        rank: 3
    }
];

export const upcomingFixturesForRegularSeasonG2008_LTG12_1: Fixture[] = [
    {
        date: 'Th 27.08.2020',
        time: '19.10',
        home: 'KFUM 1',
        away: 'Lille Tøyen 1',
        location: 'Ekeberg 21'
    },
    {
        date: 'Mo 31.08.2020',
        time: '19.10',
        home: 'Lille Tøyen 1',
        away: 'Ullern 6',
        location: 'Caltexløkka'
    },
    {
        date: 'We 09.09.2020',
        time: '19.10',
        home: 'Kjelsås 1',
        away: 'Lille Tøyen 1',
        location: 'Myrerfeltet'
    },
    {
        date: 'We 16.09.2020',
        time: '18.55',
        home: 'Skeid 2',
        away: 'Lille Tøyen 1',
        location: 'Nordre Åsen kunstgress 2'
    },
    {
        date: 'Mo 21.09.2020',
        time: '18.00',
        home: 'Lille Tøyen 1',
        away: 'Ready 5',
        location: 'Caltexløkka'
    },
    {
        date: 'We 07.10.2020',
        time: '18.10',
        home: 'KFUM 6',
        away: 'Lille Tøyen 1',
        location: 'Ekeberg kunstgress'
    },

    {
        date: 'Su 18.10.2020',
        time: '12.40',
        home: 'Lille Tøyen 1',
        away: 'Nordstrand 5',
        location: 'Caltexløkka'
    },
    {
        date: 'Th 22.10.2020',
        time: '19.10',
        home: 'Røa Bogstad',
        away: 'Lille Tøyen 1',
        location: 'Røa kunstgress 2'
    }
];

export const upcomingFixturesForRegularSeasonG2008_LTG12_3: Fixture[] = [
    {
        date: 'Mo 31.08.2020',
        time: '18.00',
        home: 'Lille Tøyen 3',
        away: 'Frigg oransje',
        location: 'Caltexløkka'
    },
    {
        date: 'Mo 07.09.2020',
        time: '19.10',
        home: 'Lyn Ullevål 1',
        away: 'Lille Tøyen 3',
        location: 'Kringsjå'
    },
    {
        date: 'Tu 15.09.2020',
        time: '19.10',
        home: 'Lille Tøyen 3',
        away: 'Vålerenga MonsterE 2',
        location: 'Caltexløkka'
    },
    {
        date: 'Th 15.10.2020',
        time: '19.05',
        home: 'Lille Tøyen 3',
        away: 'Lyn Tåsen Blå',
        location: 'Caltexløkka'
    },
    {
        date: 'Mo 19.10.2020',
        time: '19.10',
        home: 'Vålerenga Gutta2',
        away: 'Lille Tøyen 3',
        location: 'Valle Hovin kunstgress 3'
    },
    {
        date: 'Mo 26.10.2020',
        time: '19.05',
        home: 'Lille Tøyen 3',
        away: 'Bislett 2008',
        location: 'Caltexløkka'
    }
    ];
