const dynamicContent = document.getElementById("dynamic");
console.log(dynamicContent);

const phrases=["Software Engineer...","Student...","Coder...."];
var phraseIndex=0;

let letterIndex=0;
const typingSpeed=150;
const erasingSpeed = 75;

function printLetters(phrase){
    if(letterIndex==phrase.length){
        clearLetters();
    }
    if(letterIndex<phrase.length)
        {
            dynamicContent.textContent+=phrase.charAt(letterIndex);
            letterIndex+=1;
            setTimeout(function(){
                    printLetters(phrase)},typingSpeed)
        }
}

function clearLetters(){
    if(letterIndex == -1){
        phraseIndex = (phraseIndex+1) % phrases.length;
        letterIndex=0;
        printLetters(phrases[phraseIndex]);
    }
    else if(letterIndex>-1){
        let updatdPhrase="";
        for(let index=0;index<letterIndex;index++){
            updatdPhrase += phrases[phraseIndex].charAt(index);
        }
        dynamicContent.textContent = updatdPhrase;
        letterIndex-=1;
        setTimeout(clearLetters,erasingSpeed);
    }
}

// function printLetters(phrase){
//     for(let index=0; index<phrase.length;index++){
//         console.log(phrase.charAt(index));
//         dynamicContent.textContent=phrase;
//         setTimeout()
//     }
// }

printLetters(phrases[phraseIndex]);