function toggleCartStatus() {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]')

    // панель оформить заказ будет появляться в не пустой корзине и исчезать в пустой
    const orderForm = document.querySelector('#order-form')
    // Когда в корзине есть товары, в '.cart-wrapper' что-то есть - надо скрыть бейдж
    if (cartWrapper.children.length > 0) {
        console.log('Full');
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none')
    } else {
        console.log('EMPTY');
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }
}