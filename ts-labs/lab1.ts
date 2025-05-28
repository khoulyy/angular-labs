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
interface ApiResult<T> {
    data: T,
    success: Boolean,
    message: string,
}


// Bonus: :)
function printProductInfo(result: ApiResult<Product>): void {
    if (result.success && result.data) {
        console.log("Here is your data");
    } else {
        console.log("No data, sorry :(");
    }
}
