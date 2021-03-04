import namor from 'namor'
import { nanoid } from 'nanoid'

export const tableRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


export const locationData = [
    { id: nanoid(5), ['first name']: namor.generate({ words: 3, saltLength: 0 }), region: 'Punjab', 'location(lng/lat)': [76.74518379999999, 30.6823233], ['num Of Visit']: 90 },
    { id: nanoid(5), ['first name']: namor.generate({ words: 3, saltLength: 0 }), region: 'Kanto', 'location(lng/lat)': [139.6503, 35.6762], ['num Of Visit']: 9 },
    { id: nanoid(5), ['first name']: namor.generate({ words: 3, saltLength: 0 }), region: 'Shinjuku', 'location(lng/lat)': [139.7034, 35.6938], ['num Of Visit']: 100 },
    { id: nanoid(5), ['first name']: namor.generate({ words: 3, saltLength: 0 }), region: 'Germany', 'location(lng/lat)': [5.2913, 52.1326], ['num Of Visit']: 45 },
    { id: nanoid(5), ['first name']: namor.generate({ words: 3, saltLength: 0 }), region: 'Netherland', 'location(lng/lat)': [10.4515, 51.1657], ['num Of Visit']: 86 },
    { id: nanoid(5), ['first name']: namor.generate({ words: 3, saltLength: 0 }), region: 'Texas', 'location(lng/lat)': [135.7681, 35.0116], ['num Of Visit']: 107 },
    { id: nanoid(5), ['first name']: namor.generate({ words: 3, saltLength: 0 }), region: 'Kyoto', 'location(lng/lat)': [99.9018, 31.9686], ['num Of Visit']: 254 },
]