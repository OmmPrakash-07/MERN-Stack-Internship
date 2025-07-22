const products = [
{ id: 1, name: 'LED Bulb', category: 'Electronics', price: 150, inStock:
true },
{ id: 2, name: 'Solar Panel', category: 'Energy', price: 2500, inStock:
false },
{ id: 3, name: 'Fan', category: 'Electronics', price: 1200, inStock: true },
{ id: 4, name: 'Bookshelf', category: 'Furniture', price: 2200, inStock:
true },
{ id: 5, name: 'Notebook', category: 'Stationery', price: 40, inStock:
false },
{ id: 6, name: 'Water Bottle', category: 'Kitchen', price: 90, inStock:
true },
{ id: 7, name: 'Table Lamp', category: 'Electronics', price: 500, inStock:
true },
{ id: 8, name: 'Chair', category: 'Furniture', price: 1500, inStock: false },
{ id: 9, name: 'Marker', category: 'Stationery', price: 25, inStock: true },
{ id: 10, name: 'Induction Cooktop', category: 'Kitchen', price: 1800,
inStock: true }
];

// Use filter to get only products in stock.

// const result = products.filter((ele)=>{
//     return ele.price>1000
// })
// console.log(result);

// Use map to return an array of strings in format: "Product: [name], Category: [category]".

const productDescriptions = products.map(product => 
  `Product: ${product.name}, Category: ${product.category}`
);

console.log(productDescriptions);
