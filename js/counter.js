//Добавляем прослушку на всем окне
window.addEventListener("click", function (event) {
  let counter;

  //Проверяем клик строго по кнопкам Плюс или Минус
  if (event.target.hasAttribute("data-action")) {
    //Находим ближайшего родителя элемента, по кот. кликнули с определенным селектором
    const counterWrapper = event.target.closest(".counter-wrapper");
    //Находим сам счетчик, который находится внутри этого родителя
    counter = counterWrapper.querySelector("[data-counter]");
  }

  //Отслеживаем, является ли элемент, по которому мы кликнули, кнопкой Плюс
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  //Отслеживаем, является ли элемент, по которому мы кликнули, кнопкой Минус
  if (event.target.dataset.action === "minus") {
    //Проверяем, чтобы счетчик был больше 1
    if (parseInt(counter.innerText) > 1) {
      //парсит целые числа
      counter.innerText = --counter.innerText;

      //Если кнопка Минус и счетчик = 1, то удаляем товар из корзины
    } else if (event.target.closest(".cart-wrapper") && parseInt(counter.innerText) === 1) {
      event.target.closest(".cart-item").remove();

      toggleCartStatus();
      calcCartPriceAndDelivery();
    }

    //Проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute("data-action") && event.target.closest(".cart-wrapper")) {
      calcCartPriceAndDelivery();
    }
  }
});
