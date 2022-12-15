// https://uk.javascript.info/object-methods
// https://codeguida.com/post/2456

////TODO this in function () changes 
// const parent = {
//     mom_name: "Vira Sladkova",
//     mother: function () {
//         console.log("1", this);                 //this == parent
//         return `${this.mom_name} is my mother.`;
//     },
// };
//console.log("2", this);
//console.log(parent.mother());


////TODO this in () => NOT changes  
// const parent = {
//     mom_name: "Vira Sladkova",
//     mother: () => {
//         console.log("1", this);                  //this != parent
//         return `${this.mom_name} is my mother.`;
//     },
// };
//console.log("2", this);
//console.log(parent.mother());

// const parent = {
//     mom_name: "Vira Sladkova",
//     mother: function () {
//         let a = () => {
//             console.log("1", this);
//             console.log(`${this.mom_name} is my mother.`);
//         };
//         a();
//     }
// };

// console.log("2", this);
// parent.mother()

//TODO function(){function(){}} not working BUT function{()=>} working
let animals = {
    domesticAnimals: ["cat", "dog", "cow", "goat", "sheep", "donkey", "pig", "horse"],
    printdomesticAnimals: function () {
        setTimeout(() => {
            console.log(this.domesticAnimals.join("-"));
        }, 3000);
    },
};
animals.printdomesticAnimals();
