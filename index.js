let word = document.querySelector("#secret");
let letter = document.querySelector("#letter");
let button = document.querySelector("#button");
let lives = document.querySelector("#lives");
let form = document.querySelector("#form");
let array = document.querySelector("#array")
let reset = document.querySelector("#reset")


let randomWords = [
    "cheap",
    "crown",
    "honey",
    "terrible",
    "squeamish",
    "scrape",
    "confess",
    "rock",
    "soggy",
    "giant",
    "step",
    "son",
    "weigh",
    "iron",
    "fantastic",
    "premium",
    "waves",
    "famous",
    "straw",
    "blind",
    "chubby",
    "snakes",
    "agree",
    "fanatical",
    "maddening",
    "arrange",
    "odd",
    "advise",
    "blow",
    "hurried",
    "existence",
    "charming",
    "wiry",
    "middle",
    "books",
    "camp",
    "country",
    "quince",
    "bitter",
    "detail",
    "honey",
    "parcel",
    "release",
    "guide",
    "tightfisted",
    "horrible",
    "somber",
    "magic",
    "bee",
    "dinner",
    "animated",
    "float",
    "geese",
    "maid",
    "billowy",
    "mess up",
    "broken",
    "poison",
    "calendar",
    "limping",
    "disapprove",
    "quiet",
    "share",
    "berserk",
    "psychotic",
    "ice",
    "redundant",
    "pie",
    "jump",
    "measly",
    "robin",
    "verse",
    "wretched",
    "raspy",
    "unusual",
    "terrific",
    "kitty",
    "perform",
    "stuff",
    "reproduce",
    "standing",
    "expensive",
    "whispering",
    "grey",
    "edge",
    "wandering",
    "excited",
    "tray",
    "fill",
    "maniacal",
    "uncle",
    "torpid",
    "grip",
    "writing",
    "mate",
    "naughty",
    "racial",
    "type",
    "scared",
]
let letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let alphabet = {
    "b": false,
    "a": false,
    "c": false,
    "d": false,
    "e": false,
    "f": false,
    "g": false,
    "h": false,
    "i": false,
    "j": false,
    "k": false,
    "l": false,
    "m": false,
    "n": false,
    "o": false,
    "p": false,
    "q": false,
    "r": false,
    "s": false,
    "t": false,
    "u": false,
    "v": false,
    "w": false,
    "x": false,
    "y": false,
    "z": false,
}


let wrongLetters = [];
let rightLetters = [];
let tries = 3;
let randomWord;
let wordStatus = null;
const getRandomWordFunc = function () {
    let randomNumber = Math.floor(Math.random() * randomWords.length)
    randomWord = [...randomWords[randomNumber]]
    return randomWord
}

const populateAlphabet = function () {
    randomWord = getRandomWordFunc();
    console.log(randomWord)
    for (let i = 0; i < randomWord.length; i++) {
        let ltr = randomWord[i]
        alphabet[ltr] = true;
    }
    return alphabet
}


// populateAlphabet()

const resetInput = function () {
    letter.value = "";
}
const guessedLetter = function () {
    alphabet[letter.value] = "tried"
    resetInput();
}
function guessAnswer() {
    if (alphabet[letter.value] === true) {
        rightLetters.push(letter.value)
        guessedLetter();

        console.log(alphabet)

    } else if (alphabet[letter.value] === "tried") {
        alert("Ai mai incercat aceasta litera! ")
        resetInput();
    } else if (alphabet[letter.value] === false && tries > 0) {
        wrongLetters.push(letter.value)
        array.innerText = wrongLetters;
        tries = tries - 1;
        lives.textContent = tries;
        guessedLetter()
        alert(`Litera gresita, mai ai ${tries} vieti.`)
        console.log(alphabet)
        return alphabet

    } else if (tries === 0) {
        alert("Ai ramas fara vieti, jocul s-a terminat!")
        newGame()
    }

    return alphabet

}
populateAlphabet()

function gameWin() {
    let values = Object.values(alphabet)
    function checkFalseAndTried(status) {
        return status === false || status === "tried"
    }
    if (values.every(checkFalseAndTried) === true) {
        alert(`Felicitari, ai castigat! Cuvantul a fost "${randomWord.join("")}"`)
        newGame()
    }
}

function cens() {
    wordStatus = randomWord.map(character => (rightLetters.indexOf(character) >= 0 ? character : "_"));
    word.innerHTML = wordStatus.join(" ");

}

cens();


form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(alphabet)
    console.log(letter.value)
    console.log(word.innerText = letter.value)

    guessAnswer();
    cens();
    gameWin();

})

function newGame() {

    wrongLetters = [];
    rightLetters = [];
    lives.textContent = 3;
    randomWord;
    array.innerText = "";
    console.log("hello");
    letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    alphabet = {
        "b": false,
        "a": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false,
        "h": false,
        "i": false,
        "j": false,
        "k": false,
        "l": false,
        "m": false,
        "n": false,
        "o": false,
        "p": false,
        "q": false,
        "r": false,
        "s": false,
        "t": false,
        "u": false,
        "v": false,
        "w": false,
        "x": false,
        "y": false,
        "z": false,
    }
    wordStatus = null;
    populateAlphabet()
    console.log(alphabet)
    console.log(randomWord)
    guessAnswer();
    cens();
}
reset.addEventListener("click", function () {
    newGame();
})

