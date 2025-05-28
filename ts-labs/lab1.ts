// Q1
interface Product {
    id: number,
    name: string,
    price: number,
    inStock: Boolean,
}


// Q2
function logProduct(product: Product): void {
    for (let detail in product) {
        console.log(product[detail]);
    }
}

let product: Product = {
    id: 1,
    name: "Shoes",
    price: 1500,
    inStock: true,
    
}

logProduct(product);

// Q3
type ProductOrError = Product | string;
let productType: ProductOrError;
// productType = 5; // Error
productType = "Hi Product!";


// Q4
function wrapValue<T>(value: T): T[] {
    return [value];
}

const result = wrapValue([5,3]);
console.log(result);

// Q5
interface Box<T> {
    content: T;
    getContent(): T;
}

const numberBox: Box<number> = {
    content: 42,
    getContent() {
        return this.content;
    }
}

console.log(numberBox.content);
console.log(numberBox.getContent());
