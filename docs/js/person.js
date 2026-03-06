function isBook(product) {
    return product.author !== undefined;
}
function isElectronic(product) {
    return product.brand !== undefined;
}
function isClothing(product) {
    return product.size !== undefined;
}
const prodcuts = [
    { id: 1, name: 'The Great Gatsby', price: 10.99, author: 'F. Scott Fitzgerald', pages: 180, genre: 'Classic' },
    { id: 2, name: 'Smartphone', price: 299.99, brand: 'TechBrand', warrantyYears: 2, power: 15 },
    { id: 3, name: 'T-Shirt', price: 19.99, size: 'M', gender: 'Other', material: 'Cotton' },
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
