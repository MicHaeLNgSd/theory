const preSalePrice = (originalPrice) => { return originalPrice * 0.8 }
const blackFridayPrice = (originalPrice) => { return originalPrice * 0.6 }
const defaultPrice = (originalPrice) => { return originalPrice }
const promotionPrice = (originalPrice) => { return (originalPrice > 1000) ? originalPrice * 0.7 : originalPrice -= 20 }

const priceStrategies = {
    "pre-sale": preSalePrice,
    promotion: promotionPrice,
    "black-friday": blackFridayPrice,
    default: defaultPrice,
};

function getPrice(originalPrice, status) {
    return priceStrategies[status](originalPrice);
}

console.log(getPrice(1000, "pre-sale"));
console.log(getPrice(1000, "promotion"));
console.log(getPrice(1000, "black-friday"));
console.log(getPrice(1000, "default"));