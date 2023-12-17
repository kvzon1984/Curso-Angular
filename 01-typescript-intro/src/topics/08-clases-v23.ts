
// export class Person {
    // public name: string;
    // private address: string;

    // constructor( name: string, address: string ) {
        // this.name = name,
        // this.address= address
    // }
// }
export class Person {

    constructor(
        public name: string,
        private address: string = 'No Address'
    ) {}
}

// Extender una clase

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'New York')
//     }
// }

// Composicion sobre la herencia

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName);
    }
}

const tony = new Person('Tony Stak', 'New York')
const iroman = new Hero('Iroman', 45, 'Tony', tony);

console.log(iroman);
