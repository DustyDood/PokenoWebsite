//This file is for generating the Pokeno board and all its classes!

document.getElementById("columnGenerationTime").addEventListener("load", columnGeneration());


/*Instead of manually writing in each column for the row, let's make it with JS!
This will also make it a lot easier to edit the classes that are generated instead of having
to go through all 25
*/
function columnGeneration() {
    var homebase = document.getElementById("columnGenerationTime")
    for (i=1; i < 26; i++) {
        var newGridItem = document.createElement('div')
        //This is setting the innerHTML for now. I'll probably remove later.
        newGridItem.innerHTML = i
        //This is adding all our bootstrap classes, which gives us nicer formatting/css
        newGridItem.className = "col border border-danger"
        //For some reason, this eventListener is activating on load rather than for being clicked!
        //Success!
        newGridItem.addEventListener("click", function() {
            generateRandomCard(this);
            })

        //Former div for the column
        //<div class="col border border-danger" onclick="generateRandomCard(this)">1</div>
        homebase.appendChild(newGridItem)

    }
}