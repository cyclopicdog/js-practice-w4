import Product from './Product';
import Display_Product from './Display_product';

const products = [
    new Product('mug', 100, 100),
    new Product('plate', 200, 70),
    new Product('knife', 150, 30),
    new Product('fork', 150, 30),
    new Product('spoon', 90, 60),
    new Product('teaspoon', 300, 20),
    new Product('wine glass', 60, 150),
];

const container = document.querySelector('.display');

products.forEach((product) => {
    const display = new Display_Product(product);
    container.appendChild(display.mount());
});
