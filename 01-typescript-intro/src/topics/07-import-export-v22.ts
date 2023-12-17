
import { Product, taxCalculation } from './06-function-destructuring-v20'

const shopingCart: Product[] = [
    {
        description: 'Nokia',
        price: 150.0,
    },
    {
        description: 'ipad',
        price: 350.0,
    },

];



const [ total, tax ] = taxCalculation({ tax: 1.19, products: shopingCart })

console.log({ total });
console.log({ tax });
