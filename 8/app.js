'use strict';

class ProductItem{
    constructor(productID, price){
        this.productID = productID;
        this.price = price;
        this.quantity = 1;
    }
}

let cart = [];

function addToCart(newProductID, price){
    let found = false;
    cart.forEach(el=>{
        if(el.productID === newProductID){
            el.quantity++;
            found = true;
        }
    })

    if(!found){
        let product = new ProductItem(newProductID, price);
        cart.push(product);
    }

    let totalItems = 0;
    cart.forEach(el=>{
        totalItems += el.quantity;
    })

    const cartIconEl = document.querySelector('.cartIconWrap');
    cartIconEl.innerHTML = `<img class="cartIcon" src="images/cart.png" alt=""><span>${totalItems}</span>`;
}

document.querySelector('.featuredItems')
.addEventListener('click', event=>{
    if(event.target.classList.contains('darkButton')){
        let featuredData = event.target.parentElement.parentElement.nextElementSibling;
        let featuredName = featuredData.querySelector('.featuredName').innerText;
        let featuredPrice = Number.parseFloat(featuredData.querySelector('.featuredPrice').innerText.substring(1));

        addToCart(featuredName, featuredPrice);
    }
})

document.querySelector('.cartIconWrap').addEventListener('click', event=>{
    let totalPrice = 0;
    cart.forEach(el=>{
        totalPrice += el.quantity * el.price;
    })
    let str = 'Название товара    Количество    Цена за шт.    Итого\n';
    cart.forEach(el=>{
        str += `${el.productID}    ${el.quantity} шт.    $${el.price}    $${el.price*el.quantity} \n`;
    })
    str += `Товаров в корзине на сумму: $${totalPrice}`;
    window.alert(str);
})


let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});