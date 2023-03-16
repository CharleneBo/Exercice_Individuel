function getLatinCharacterList (name){
    const split = name.split("")
    return split;
}


function translateLatinCharacter(toto){
    const latinToMorse = {
        'A':'.-',
        'B':'-...',
        'C':'-.-.',
        'D':'-..',
        'E':'.',
        'F':'..-.',
        'G':'--.',
        'H':'....',
        'I':'..',
        'J':'.---',
        'K':'-.-',
        'L':'.-..',
        'M':'--',
        'N':'-.',
        'O':'---',
        'P':'.--.',
        'Q':'--.-',
        'R':'.-.',
        'S':'...',
        'T':'-',
        'U':'..-',
        'V':'...-',
        'W':'.--',
        'X':'-..-',
        'Y':'-.--',
        'Z':'--..'
    }
    
    return latinToMorse[toto];
}

function encode(titi){
    titi = titi.toUpperCase();
    let tab = []
    for (let add of titi) {
        add = translateLatinCharacter(add)
        tab.push(add)
    }
    return tab;
}

function getMorseCharacterList(tata){
    const split = tata.split(" ")
    return split;
}

function translateMorseCharacter(vovo){
    const morseToLatin = {
        '-': "T",
        '--': "M",
        '---': "O",
        '--.': "G",
        '--.-': "Q",
        '--..': "Z",
        '-.': "N",
        '-.-': "K",
        '-.--': "Y",
        '-.-.': "C",
        '-..': "D",
        '-..-': "X",
        '-...': "B",
        '.': "E",
        '.-': "A",
        '.--': "W",
        '.---': "J",
        '.--.': "P",
        '.-.': "R",
        '.-..': "L",
        '..': "I",
        '..-': "U",
        '..-.': "F",
        '...': "S",
        '...-': "V",
        '....': "H"
      }
    return morseToLatin[vovo];
}

function decode(vivi){
    
    let tab = []
    for (let add of vivi) {
        add = translateMorseCharacter(add)
        tab.push(add)
    }
    console.log(typeof(add))
    return tab;
}



console.log(decode(".... . .-.. ---"))
console.log(getMorseCharacterList(".... . .-.. ---"))
console.log(translateMorseCharacter("...."))

console.log(getLatinCharacterList("Hello world"))
console.log(translateLatinCharacter("A"))
console.log(encode("Hello World"))


