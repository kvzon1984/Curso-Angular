
function addNumbers(a: number, b: number) {

    return a + b

}

const addNumbersArrow = (a: number, b: number) => {
    return a + b
}

const addNumbersArrowb = (a: number, b: number):string => {
    return `${a + b}`
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base
}

const result: number = addNumbers(1,5)
const resultArrow: number = addNumbersArrow(9,5)
const resultArrowb: string = addNumbersArrowb(9,6)
const resultMultiply: number = multiply(1,2)

console.log({ result });
console.log({ resultArrow });
console.log({ resultArrowb });
console.log({ resultMultiply });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    },
}

healCharacter( strider, 60);

strider.showHp();




export {}