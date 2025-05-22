//Добавляем прослушку на всем окне
window.addEventListener("click", function (event) {
  let counter;

  //Проверяем клик строго по кнопкам Плюс или Минус
  if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {
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
    }
  }
});
