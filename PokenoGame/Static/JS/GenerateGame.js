function GenerateGame() {
    alert("poop!")
    //First, we start by randomly choosing our game room number
    var roomnumber = Math.floor((Math.random() * 100) + 1)
    //Next, thanks to the power of urls.py, this room number is passed
    //as the primary key, allowing us to generate a new web page!

    window.location.href = "../" + String(roomnumber) + "/game/"
    //This URL matches the format for the "gameStart" url, generating a random
    //page and allowing us to play Pokeno!
}