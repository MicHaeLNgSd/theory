// область видимості змінної, замикання, поняття hoisting 
// Завдання по масивам
// Даний масив 
let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2022-12-08').toLocaleDateString(),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2022-12-08').toLocaleDateString(),
        "capacity": 5
    },
    {
        "color": "black",
        "type": "pickup",
        "registration": new Date('2021-11-07').toLocaleDateString(),
        "capacity": 2
    },
    {
        "color": "white",
        "type": "sportcar",
        "registration": new Date('2022-10-06').toLocaleDateString(),
        "capacity": 2
    },
]
//console.log(cars);

// реалізуйте фільтрацію по даті, в даному прикладі по даті 2022-12-08 функція повинна повернути перші 2 об'єкта

//V1
let filterByDateV1 = cars.filter((item) => item.registration.includes(new Date('2021-11-07').toLocaleDateString()))
console.log('filterByDate', filterByDateV1);

//V2
let filterByDateV2 = cars.filter((item) => item.registration.includes('08.12.2022'))
console.log('filterByDate', filterByDateV2);

//спробуй тепер < заданої дати.
let filterByDateEarlier = cars.filter((item) => item.registration < '08.12.2022')
console.log('filterByDateEarlier', filterByDateEarlier);