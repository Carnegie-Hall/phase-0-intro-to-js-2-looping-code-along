
/*for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy Birthday to me!`);
} 
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
return gifts; 
}
wrapGifts(gifts); */

/*const hippo = ["Guadalupe", "Ollie", "Aki"]*/

function writeCards(family, surprise) {
  const thanks = []
    for (let card = 0; card < family.length; card++) {
      console.log(`Thank you, ${family[card]}, for the wonderful ${surprise} gift!`)
        thanks.push(`Thank you, ${family[card]}, for the wonderful ${surprise} gift!`)
    } return thanks 
}

function countDown(number) {
   let countdown = 10
    while (countdown > -1 ) {
        console.log(countdown--);
    }
} 

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
