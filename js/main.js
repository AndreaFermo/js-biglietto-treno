const kmPrice = 0.21;
console.log(kmPrice);

let distance = parseInt(prompt('Quanti kilometri vuoi percorrere?'));
document.getElementById('distance').innerHTML = `${distance} km`;
console.log(distance);

let age = parseInt(prompt('Quanti anni hai?'));
document.getElementById('age').innerHTML = `${age} anni`;
console.log(age);

const totalPrice = kmPrice * distance;
document.getElementById('totalPrice').innerHTML = `${totalPrice} &#8364`;
console.log(totalPrice);

const underageDiscont = totalPrice * 0.8;
const uDiscountRounded = underageDiscont.toFixed(2);


const retiredDiscount = totalPrice * 0.6;
const rDiscountRounded = retiredDiscount.toFixed(2);

if (isNaN(distance) || isNaN(age)) {
    console.log('I dati inseriti devo essere numeri! se visualizzi questo messaggio aggiorna la pagina e riprova!')
} else {
    if (age < 18) {
        document.getElementById('discountedPrice').innerHTML = `Biglietto ridotto - sotto i 18 anni: ${uDiscountRounded} &#8364`;
        console.log(uDiscountRounded);
    } else if (age >= 65) {
        document.getElementById('discountedPrice').innerHTML = `Biglietto ridotto - 65 anni compiuti o più: ${retiredDiscount} &#8364`;
        console.log(rDiscountRounded)
    } else {
        document.getElementById('discountedPrice').innerHTML = `Nessuna scontistica applicabile`;
    }
}