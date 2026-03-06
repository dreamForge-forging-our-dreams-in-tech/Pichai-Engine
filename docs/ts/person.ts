type Size = 'S' | 'M' | 'L' | 'XL';
type Gender = 'Male' | 'Female' | 'Other';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Book extends Product {
    author: string;
    pages: number;
    genre: string;
}

interface Electronic extends Product {
    brand: string;
    warrantyYears: number;
    power: number;
}

interface Clothing extends Product {
    size: Size;
    gender: Gender;
    material: string;
}

function isBook(product: any): product is Book {
    return (product as Book).author !== undefined;
}

function isElectronic(product: any): product is Electronic {
    return (product as Electronic).brand !== undefined;
}

function isClothing(product: any): product is Clothing {
    return (product as Clothing).size !== undefined;
}

const prodcuts: Product[] = [
    { id: 1, name: 'The Great Gatsby', price: 10.99, author: 'F. Scott Fitzgerald', pages: 180, genre: 'Classic' } as Book,
    { id: 2, name: 'Smartphone', price: 299.99, brand: 'TechBrand', warrantyYears: 2, power: 15 } as Electronic,
    { id: 3, name: 'T-Shirt', price: 19.99, size: 'M', gender: 'Other', material: 'Cotton' } as Clothing,
];

prodcuts.forEach(product => {
    if (isBook(product)) {
        console.log('product is a book', product);
    }

    if (isElectronic(product)) {
        console.log('product is an electronic', product);
    }

    if (isClothing(product)) {
        console.log('product is clothing', product);
    }
});