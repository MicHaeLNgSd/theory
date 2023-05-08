class GetPrice {
    constructor(strategy) {
        this.strategy = strategy
    }
    doResult(originalPrice) {
        return this.strategy.doAction(originalPrice);
    }
}

class PreSaleStraregy {
    doAction(originalPrice) {
        return originalPrice * 0.8;
    }
}
class BlackFridayStraregy {
    doAction(originalPrice) {
        return originalPrice * 0.6;
    }
}
class DefaultStraregy {
    doAction(originalPrice) {
        return originalPrice;
    }
}
class PromotionStraregy {
    doAction(originalPrice) {
        return (originalPrice > 1000) ? originalPrice * 0.7 : originalPrice -= 20;
    }
}

// const preSaleStraregy = new PreSaleStraregy();
// const blackFridayStraregy = new BlackFridayStraregy();
// const defaultStraregy = new DefaultStraregy();
// const promotionStraregy = new PromotionStraregy();


// const preSalePrice = new GetPrice(preSaleStraregy);
// const blackFridayPrice = new GetPrice(blackFridayStraregy);
// const defaultPrice = new GetPrice(defaultStraregy);
// const promotionPrice = new GetPrice(promotionStraregy);

const preSalePrice = new GetPrice(new PreSaleStraregy());
const blackFridayPrice = new GetPrice(new BlackFridayStraregy());
const defaultPrice = new GetPrice(new DefaultStraregy());
const promotionPrice = new GetPrice(new PromotionStraregy());


console.log(preSalePrice.doResult(1000));
console.log(blackFridayPrice.doResult(1000));
console.log(defaultPrice.doResult(1000));
console.log(promotionPrice.doResult(10000));