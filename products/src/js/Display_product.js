export default class Display_Product {
    constructor(product) {
        this.product = product;
    }

    render() {
        this.element = this.createHTMLelement(
            `<div class="display__product">
                <div class="display__name">${this.product.name}</div>
                <div class="display__price">
                    Price:&ThickSpace;<span id="price">${this.product.price}</span>
                </div>
                <div class="display__qty">
                    QTY:&ThickSpace;<span id="qty">${this.product.qty}</span>
                </div>
                <button class="display__btn">Buy me bitch!</button>
            </div>`
        );

        const buy_btn = this.element.querySelector('.display__btn'); //not document!! this.element!!
        buy_btn.addEventListener('click', () => {
            this.product.sell();
            this.element.querySelector('#qty').textContent = this.product.qty;
            //this.mount();
        });

        console.log(this.product.qty);
    }
    mount() {
        this.render();
        this.update();
        return this.element;
    }

    update() {}

    //utility function
    createHTMLelement(html, container = 'div') {
        const div = document.createElement(container);
        div.innerHTML = html;
        return div.firstChild;
    }
}
