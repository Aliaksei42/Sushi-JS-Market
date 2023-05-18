function calcCartPriceAndDelivery() {
    // Нашли карточки с товарами из корзины по классу
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost')
    const cartDelivery = document.querySelector('[data-cart-delivery]')

    // Общая стоимость товаров
    let totalPrice = 0;

    // Обходим все блоки с ценами в корзине
    cartItems.forEach(function (item) {      
        // Находим кол-во товара
        const amountEl = item.querySelector('[data-counter]');
        // стоимость товара за 1 шт
        const priceEl = item.querySelector('.price__currency');
        // внутреннее текстовое содержимое кол-ва заказа преобразуем в целое число и умножаем на стоимость 
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice; 
    })
    // Отображаем общую цену на странице
    totalPriceEl.innerText = totalPrice;

    // если в корзине больше чем на 0, то отображаем стоимоть доставки, если 0 то скрываем
    if (totalPrice > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    // когда сумма заказа будет >=600 меняем цвет и текст
    if ( totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
    }

    // При заказе меньше 600 в итого прибавляем стоимость доставки
    // if (totalPrice > 0 && totalPrice < 600) {
    //     totalPriceEl.innerText = totalPrice + parseInt(deliveryCost.innerText);
    // }
}