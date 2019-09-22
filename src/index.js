const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let morseStrong = expr.match(/.{10}/g);

    for (let i = 0; i < morseStrong.length; i++) {

        if (morseStrong[i] === '0000001011')  {

            morseStrong[i] = 'a';
        }
        else if (morseStrong[i] === '0011101010') {

            morseStrong[i] = 'b'
        }
        else if (morseStrong[i] === '0011101110') {

            morseStrong[i] = 'c'
        }
        else if (morseStrong[i] === '0000111010') {

            morseStrong[i] = 'd'
        }
        else if (morseStrong[i] === '0000000010') {

            morseStrong[i] = 'e'
        }
        else if (morseStrong[i] === '0010101110') {

            morseStrong[i] = 'f'
        }
        else if (morseStrong[i] === '0000111110') {

            morseStrong[i] = 'g'
        }
        else if (morseStrong[i] === '0010101010') {

            morseStrong[i] = 'h'
        }
        else if (morseStrong[i] === '0000001010') {

            morseStrong[i] = 'i'
        }
        else if (morseStrong[i] === '0010111111') {

            morseStrong[i] = 'j'
        }
        else if (morseStrong[i] === '0000111011') {

            morseStrong[i] = 'k'
        }
        else if (morseStrong[i] === '0010111010') {

            morseStrong[i] = 'l'
        }
        else if (morseStrong[i] === '0000001111') {

            morseStrong[i] = 'm'
        }
        else if (morseStrong[i] === '0000001110') {

            morseStrong[i] = 'n'
        }
        else if (morseStrong[i] === '0000111111') {

            morseStrong[i] = 'o'
        }
        else if (morseStrong[i] === '0010111110') {

            morseStrong[i] = 'p'
        }
        else if (morseStrong[i] === '0011111011') {

            morseStrong[i] = 'q'
        }
        else if (morseStrong[i] === '0000101110') {

            morseStrong[i] = 'r'
        }
        else if (morseStrong[i] === '0000101010') {

            morseStrong[i] = 's'
        }
        else if (morseStrong[i] === '0000000011') {

            morseStrong[i] = 't'
        }
        else if (morseStrong[i] === '0000101011') {

            morseStrong[i] = 'u'
        }
        else if (morseStrong[i] === '0010101011') {

            morseStrong[i] = 'v'
        }
        else if (morseStrong[i] === '0000101111') {

            morseStrong[i] = 'w'
        }
        else if (morseStrong[i] === '0011101011') {

            morseStrong[i] = 'x'
        }
        else if (morseStrong[i] === '0011101111') {

            morseStrong[i] = 'y'
        }
        else if (morseStrong[i] === '0011111010') {

            morseStrong[i] = 'z'
        }
        else if (morseStrong[i] === '1011111111') {

            morseStrong[i] = '1'
        }
        else if (morseStrong[i] === '1010111111') {

            morseStrong[i] = '2'
        }
        else if (morseStrong[i] === '1010101111') {

            morseStrong[i] = '3'
        }
        else if (morseStrong[i] === '1010101011') {

            morseStrong[i] = '4'
        }
        else if (morseStrong[i] === '1010101010') {

            morseStrong[i] = '5'
        }
        else if (morseStrong[i] === '1110101010') {

            morseStrong[i] = '6'
        }
        else if (morseStrong[i] === '1111101010') {

            morseStrong[i] = '7'
        }
        else if (morseStrong[i] === '1111111010') {

            morseStrong[i] = '8'
        }
        else if (morseStrong[i] === '1111111110') {

            morseStrong[i] = '9'
        }
        else if (morseStrong[i] === '1111111111') {

            morseStrong[i] = '0'
        }
        else if (morseStrong[i] === '**********') {

            morseStrong[i] = ' '
        }
    }

return expr = morseStrong.join("");

}

module.exports = {
    decode
}