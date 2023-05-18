const cartWrapper = document.querySelector('.cart-wrapper')

// Отслеживаем клие на странице
window.addEventListener('click', function (event) {

    // Проверяем что клик был совершен по кнопке "Добавить в корзину"
    if (event.target.hasAttribute('data-cart')) {

        // Находим карточку с товаром, внутри которой был совершен клик
        const card = event.target.closest('.card');
        
        // Собираем данные с этого товара и записываем их в единый обьект productInfo
        const productInfo = {
            id: card.dataset.id,
            // находим картинку внутри '.product-img' и с помощью .getAttribute('src') записываем значение src в imgSrc
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            // находим картинку внутри '.item-title' и с помощью .innerText записываем текст в title
            title: card.querySelector('.item-title').innerText,
            // находим текст кол-ва роллов внутри 'data-items-in-box' и с помощью .innerText записываем текст в itemsInBox
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            // находим текст вес роллов внутри 'price__weight' и с помощью .innerText записываем текст в itemsInBox
            weight: card.querySelector('.price__weight').innerText,           
            // находим текст цена роллов внутри 'price__currency' и с помощью .innerText записываем текст в price
            price: card.querySelector('.price__currency').innerText,
            // находим текст кол-во роллов внутри 'data-counter' и с помощью .innerText записываем текст в counter
            counter: card.querySelector('[data-counter]').innerText,
        };

        // Скопировали весь Cart item и размещаем собранные данные в корзине
        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                                <div class="cart-item__top">
                                    <div class="cart-item__img">
                                        <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                                    </div>
                                    <div class="cart-item__desc">
                                        <div class="cart-item__title">${productInfo.title}</div>
                                        <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                                        <!-- cart-item__details -->
                                        <div class="cart-item__details">

                                            <div class="items items--small counter-wrapper">
                                                <div class="items__control" data-action="minus">-</div>
                                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                                <div class="items__control" data-action="plus">+</div>
                                            </div>

                                            <div class="price">
                                                <div class="price__currency">${productInfo.price}</div>
                                            </div>

                                        </div>
                                        <!-- // cart-item__details -->

                                    </div>
                                </div>
                            </div>`;

        // Отобразим товар в корзине
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }

})