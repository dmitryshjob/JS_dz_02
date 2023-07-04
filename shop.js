const goods = [
    {
        id: 1,
        name: "Шапка мужская зимняя",
        description: "цвет чёрный, материал шерсть",
        sizes: ["S", "M", "L"],
        price: 550,
        available: true,
    },
    {
        id: 2,
        name: "Шапка женская зимняя",
        description: "цвет белый, материал шерсть",
        sizes: ["M", "L"],
        price: 600,
        available: true,
    },
    {
        id: 3,
        name: "Шапка детская зимняя",
        description: "цвет синий, материал шерсть",
        sizes: ["S"],
        price: 500,
        available: true,
    },
    {
        id: 4,
        name: "Бейсболка мужская ",
        description: "цвет чёрный, материал хлопок",
        sizes: ["M", "L"],
        price: 900,
        available: true,
    },
    {
        id: 5,
        name: "Бейсболка женская",
        description: "цвет чёрный, материал хлопок",
        sizes: ["L"],
        price: 1100,
        available: true,
    },
]

const basket = [
    {
        good: goods[1],
        amount: 3,
    },
    {
        good: goods[4],
        amount: 6,
    },

]

function add_One(good,amount) {
    basket.push({ good ,amount})
    return basket
}

add_One(goods[2],5)
console.log(basket)

function del_good(good, amount) {
    for(let i = 0; i < basket.length; i++) {
        if (basket[i].good == good) {
            if (amount >= basket[i].amount) {
                basket.splice(i, 1);
                return;
            } 
            basket[i].amount -= amount;
        }    
    }
    return basket
}

del_good(goods[2],2)
console.log(basket)



function delete_all() {
    basket.splice(0, basket.length);
    return basket
}
// delete_all()
console.log(basket)

function total() {
    let totalSumm = 0
    let totalAmount = 0
    for (const goodInCard of basket) {
        totalSumm += goodInCard.good.price * goodInCard.amount;
        totalAmount += goodInCard.amount
    }
    let result = {
        'totalSum': totalSumm,
        'totalAmount': totalAmount
    }
    return result

}

console.log(total())