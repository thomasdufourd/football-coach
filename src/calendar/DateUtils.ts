export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

export const numberNice = (number: number): string => {
    return `${number < 10 ? '0'+number : number}`;
};

export const dateNice = (date: Date): string => {
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}
     - ${numberNice(date.getHours())}:${numberNice(date.getMinutes())}`;
};
