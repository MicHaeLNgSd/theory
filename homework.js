// область видимості змінної, замикання, поняття hoisting 
// Завдання по масивам
// Даний масив 
//console.log(new Date().getTime());
console.log("=====================");
let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2022-12-08'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2022-12-08'),
        "capacity": 5
    },
    {
        "color": "black",
        "type": "pickup",
        "registration": new Date('2021-11-07'),
        "capacity": 2
    },
    {
        "color": "yellow",
        "type": "mini",
        //"registration": new Date('2022-12-11').toLocaleDateString(), //today is 2022-12-11
        "registration": new Date(), // will update every day)
        "capacity": 1
    },
    {
        "color": "white",
        "type": "sportcar",
        "registration": new Date('2022-10-06'),
        "capacity": 2
    },
]
//console.log(cars);

// реалізуйте фільтрацію по даті, в даному прикладі по даті 2022-12-08 функція повинна повернути перші 2 об'єкта

//V1
let filterByDateV1 = cars.filter((item) => item.registration.toLocaleDateString().includes(new Date('2022-12-08').toLocaleDateString()))
//console.log('filterByDate', filterByDateV1);

//V2
let filterByDateV2 = cars.filter((item) => item.registration.toLocaleDateString().includes('08.12.2022'))
//console.log('filterByDate', filterByDateV2);

//V3
let filterByDateV3 = cars.filter((item) => item.registration.toLocaleDateString() == new Date('2022-12-08').toLocaleDateString())
//console.log('filterByDate', filterByDateV3);

//V4
let filterByDateV4 = cars.filter((item) => item.registration.toLocaleDateString() == '08.12.2022')
//console.log('filterByDate', filterByDateV4);

//V5
let filterByDateV5 = cars.filter((item) => item.registration.getTime() == new Date('2022-12-08').getTime())
//console.log('filterByDat', filterByDateV5);
//console.log(new Date().getTime());

//V6 //TODO idk why its not working...
let filterByDateV6 = cars.filter((item) => item.registration == new Date('2022-12-08'))
//console.log('filterByDate', filterByDateV6);

// let filterByDateTest = cars.filter((item) => {
//     console.log(item.registration);
//     console.log(new Date('2022-12-08'));
//     console.log(item.registration == new Date('2022-12-08'));
// });

//TODO filterByDateTest Output:
// 2022-12-08T00:00:00.000Z
// 2022-12-08T00:00:00.000Z
// false
// 2022-12-08T00:00:00.000Z
// 2022-12-08T00:00:00.000Z
// false
// 2021-11-07T00:00:00.000Z
// 2022-12-08T00:00:00.000Z
// false
// 2022-12-12T10:18:33.826Z
// 2022-12-08T00:00:00.000Z
// false
// 2022-10-06T00:00:00.000Z
// 2022-12-08T00:00:00.000Z
// false

//and much more...

//TODO====EX2================================================================================================

//спробуй тепер < заданої дати.
let filterByDateEarlier = cars.filter((item) => item.registration.toLocaleDateString() < '08.12.2022')
//console.log('filterByDateEarlier', filterByDateEarlier);

//V2
let filterByDateEarlierV2 = cars.filter((item) => item.registration < new Date('2022-12-08'))
//console.log('filterByDateEarlierV2', filterByDateEarlierV2);
//...

//TODO====EX3================================================================================================

//доопрацюй код, щоб знаходити записи по поточній даті
let filterByDateToday = cars.filter((item) => item.registration == Date());
//console.log('filterByDateToday', filterByDateToday);
//...

//TODO====EX4================================================================================================

//щоб тобі шукало лише по поточному місяцю і року.
let filterByMonthYearStupid = cars.filter((item) => item.registration.getMonth() + 1 == '12' && item.registration.getFullYear() == '2022')
let filterByMonthYear = cars.filter((item) => item.registration.getMonth() == new Date().getMonth() && item.registration.getFullYear() == new Date().getFullYear())
//console.log('filterByMonthYear', filterByMonthYearStupid);

// let filterByMonthYearTest = cars.filter((item) => {
//     console.log(item.registration.getMonth() + 1);
//     console.log(item.registration.getFullYear());

//     console.log(new Date().getMonth());
//     console.log(new Date().getFullYear());
// });


//TODO=========================================================================================================

cars = cars.filter((item) => item.registration.getMonth() + 1 != '12')
console.log(cars);