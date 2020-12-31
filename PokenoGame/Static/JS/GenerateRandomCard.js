/*We're going to have two functions here:
    1. Being able to generate a random card that isn't already taken
    2. Filling up the board with random cards that aren't already taken

We're going to need an array that stores a chosen card's value/id so the functions know that if the possible array matches the already inputted array,
they need to try again.
*/

//This has all the card possibilities
var entireCardArray = []
for (a=1; a < 53; a++) {
    entireCardArray.push(a)
}


function generateRandomCard(gridItem) {
    //We'll start by choosing a random number from 1 to 52, as that represents the card from the deck!
    var card = Math.floor((Math.random() * 52) + 1)
    alert(card)
    console.log(gridItem.innerHTML)
}

function generateAllRandomCards() {
    //A slice of 0 essentially creates a copy of the entireCardArray in newCardArray!
    var newCardArray = entireCardArray.slice(0)
    console.log(newCardArray.length)
    for (i=1; i < 26; i++) {
        //WAIT! WHY DON"T I JUST REMOVE THE ARRAY ELEMENT AND THEN JUST KEEP PULLING FROM THAT ARRAY
        //Instead of choosing a random number of 1 - 52, if we just keep editing the array we can choose from,
        //We don't have to deal with multiple while loops

        //Ok, let's try this. First, we'll choose a card number.
        //This is going to be the index number that we're going to pull out from the array!
        //This isn't exactly the card value, but the index.
        //We use newCardArray.length as our multiplier as a way of ensuring that we can't have a number
        //greater than the indices of the array.
        var card = Math.floor((Math.random() * newCardArray.length))



        //Now that we have the index we're going to use, we grab the value.
        var cardValue = newCardArray[card]

        //Once we've chosen an index, we don't want to grab that value again. Thus, we have to remove it from the array.
        //We use splice to remove the specific section and reorder the indices. After the first number is pulled, the indices
        //will not match up with the values!
        newCardArray.splice(card, 1)



        //Theoretically, here is where we'll actually assign a card to the spot in the grid.
        //Right now I'm just console.logging to show that it worked
        console.log("Spot " + i + " has card " + cardValue)
    }
    console.log(newCardArray.length)
}


