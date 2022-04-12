const lemonade = {
    lemonJuice: 3,
    water: 3,
    sugar: 1.5,
    iceCubes: 5,
    [console.log('Hello World')]: 'Hi',
    calculatePrice() {
        return (
            this.lemonJuice * 0.3 +
            this.water * .01 +
            this.sugar * .25 +
            this.iceCubes * .05 +
            .75
        )
    }
}

function updateLemonade(lemonade, lemonJuice, water, sugar, iceCubes) {
    return {
        lemonJuice,
        water,
        sugar,
        iceCubes,
        ...lemonade
    }
}

lemonade.water = 8

console.log({ ...lemonade, water: 5 })
console.log(lemonade)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [1, 2, 3]]
const numbersCopy = [...numbers]
numbersCopy[10] = [...numbers[10]]

numbersCopy[10][0] = 5
console.log(numbers)
console.log(numbersCopy)

let { water: a, lemonJuice, sugar, iceCubes } = lemonade

console.log(a)
console.log(lemonJuice)
console.log(sugar)
console.log(iceCubes)