function debugDeafGrandma() {

let dontStop = true;
let goodbyes = 0;
while (dontStop) {

    let userInput = prompt();
    
    if (userInput == "GOODBYE" || userInput == "GOODBYE!") {
        goodbyes += 1
        if (goodbyes == 1) {
            alert("LEAVING SO SOON?")
        } else if ( goodbyes == 2 ) {
            alert("LATER, SKATER!")
            dontStop = false;
        }
    } else if ( userInput == "" ) {
        alert("WHAT!?");
    } else if (userInput.toUpperCase() != userInput) {
        alert("SPEAK UP, KID!");
    } else if (userInput.toUpperCase() == userInput) {
        alert('NO, NOT SINCE 1946!')
    }
    
}
}

debugDeafGrandma()