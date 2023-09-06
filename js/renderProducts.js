// найдем div с id - products-container
const productsContainer = document.querySelector('#products-container');
getProducts();
// ASYNC будем отправлять запрос, получать данные из products.json, работать с ними
async function getProducts() {
    //получаем данные из products.json
    const response = await fetch('./js/products.json');
    // мы получаем JSON, применяем к нему метод json чтоб достать оттуда данные и 
    // сразу сконвертировпть их из json формата(строки) в JS формат (получим массив). Выполнение ожидаем await 
    const productsArray = await response.json();
    // Запускаем ф-ю рендера (отображения товаров)
    renderProducts(productsArray);
};

// берем полученный массив, обходим его методом forEach, для каждого элемента генерируем разметку и по очерели вставляем перед закрытием divа 
function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        // разметка для продукта
        const productHTML = `<div class="col-md-6">
        <div class="card mb-4" data-id="${item.id}">
            <img class="product-img" src="img/roll/${item.imgSrc}" alt="">
            <div class="card-body text-center">
                <h4 class="item-title">${item.title}</h4>
                <p><small data-items-in-box class="text-muted">${item.itemsInBox} items.</small></p>

                <div class="details-wrapper">

                    <!-- Счетчик -->
                    <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter>1</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>
                    <!-- // Счетчик -->

                    <div class="price">
                        <div class="price__weight">${item.weight}g.</div>
                        <div class="price__currency">${item.price} €</div>
                    </div>
                </div>

                <button data-cart type="button" class="btn btn-block btn-outline-warning">+ Add to cart</button>

            </div>
        </div>
    </div>`;
    
    // вставляем в div перед его закрытием
    productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}
