let lemonJuice = 3
let water = 3
let sugar = 1.5
let iceCubes = 10

const lemonade = {
    lemonJuice,
    water,
    sugar,
    iceCubes,
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
        ...lemonade,
        lemonJuice,
        water,
        sugar,
        iceCubes
    }
}

console.log(updateLemonade(lemonade, 5, 2.5, 3, 7))