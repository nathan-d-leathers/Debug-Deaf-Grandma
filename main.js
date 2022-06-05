function deafGrandma() {
    let regex = /[a-z]/g;
    let goodbyeCount = 0;
    let str = window.prompt("Hey Kid! ")

    while (goodbyeCount < 2) {
    if (str == "GOODBYE" && goodbyeCount == 0) {
      str = window.prompt("LEAVING SO SOON?");
      goodbyeCount++;
    } else if (str == "GOODBYE" && goodbyeCount == 1) {
      return "LATER, SKATER!";
    } else if (str.length == 0) {
      str = window.prompt("WHAT?!");
    } else if (regex.test(str) == true) {
      str = window.prompt("SPEAK UP KID!");
    } else if (regex.test(str) == false) {
      str = window.prompt("NO, NOT SINCE 1946!");
    } 
    }
  };


console.log(deafGrandma());

// Alt solution half debugged with partner. worked at the time but not now. 
// function debugDeafGrandma() {

// let dontStop = true;
// let goodbyes = 0;
// let regex = /[a-z]/g;
// let userInput = window.prompt("HEY KID! ");

// while (dontStop) {

//     if (userInput == "GOODBYE" || userInput == "GOODBYE!") {
//         goodbyes += 1
//         if (goodbyes == 1) {
//             window.prompt("LEAVING SO SOON?")
//         } else if ( goodbyes == 2 ) {
//             alert("LATER, SKATER!")
//             dontStop = false;
//         }
//     } else if ( userInput == "" ) {
//         window.prompt("WHAT!?");
//     } else if (regex.test(str) == true) {
//         str = window.prompt("SPEAK UP KID!");
//     } else {
//         str = window.prompt("NO, NOT SINCE 1946!");
//     } 
    
// }
// }

// debugDeafGrandma()