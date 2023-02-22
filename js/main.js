const kmPrice = 0.21;
console.log(kmPrice)

let distance = parseInt(prompt('Quanti kilometri vuoi percorrere?'));
console.log(distance)

let age = parseInt(prompt('Quanti anni hai?'));
console.log(age)

const totalPrice = kmPrice * distance;
console.log(totalPrice)

const underageDiscont = totalPrice * 0.8;
const uDiscountRounded = underageDiscont.toFixed(2)


const retiredDiscount = totalPrice * 0.6;
const rDiscountRounded = retiredDiscount.toFixed(2)

if (isNaN(distance) || isNaN(age)) {
    console.log('I dati inseriti devo essere numeri! se visualizzi questo messaggio aggiorna la pagina e riprova!')
} else {
    if (age < 18) {
        console.log(uDiscountRounded);
    } else if (age >= 65) {
        console.log(rDiscountRounded)
    } else {
        console.log(totalPrice)
    }
}