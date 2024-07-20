/* ------------------------ Изменение логотипа в шапке ------------------------ */
// Логотип в шапке
const header_link = document.querySelector('#header_link');

// Функция изменения логотипа в шарке в зависимости от ширины
function change_logo_in_header() {
    let window_width = window.screen.width;
    // console.log(window_width);

    let logo_img = header_link.innerHTML;
    // console.log(logo_img);

    switch (logo_img) {
        case `<img src="images/logo_desktop.svg" alt="logo" class="header_logo">`:
            if (window_width <= 768) {
                console.log('Изменение на маленькое');
                header_link.innerHTML = `<img src="images/logo_mobile.svg" alt="logo" class="header_logo">`;
            }
            break;
        case `<img src="images/logo_mobile.svg" alt="logo" class="header_logo">`:
            if (window_width > 768) {
                console.log('Изменение на большое');
                header_link.innerHTML = `<img src="images/logo_desktop.svg" alt="logo" class="header_logo">`;
            }
            break;
    }
}
change_logo_in_header();

// Отслеживание изменения ширины экрана
window.addEventListener('resize', function() {
    change_logo_in_header();
}, true);


/* ------------------------ Появление поля поиска ------------------------ */
// Кнопка показа поиска
const search_show_button = document.querySelector('#search_button');

// Обертка поисковых элементов
const search_wrapper = document.querySelector('#search_wrapper');
// Поле поиска
const search_input = document.querySelector('#search_input');
// Кнопка закрытия обертки
const close_button = document.querySelector('#close_button');

// Показ обертки
search_show_button.addEventListener('click', function() {
    // Показываем обертку
    search_wrapper.classList.add('active');
    // Фокус на поле
    search_input.focus();
});
// Закрытие обертки
close_button.addEventListener('click', function() {
    search_wrapper.classList.remove('active');
});


/* ------------------------ Появление выбора языков ------------------------ */
// Кнопка выбора
const lang_button = document.querySelector('#lang_button');

// Поле языков
const langs_wrapper = document.querySelector('#langs_wrapper');

// Показ поля
lang_button.addEventListener('click', function() {
    // Показ поля
    if (!langs_wrapper.classList.contains('active')) {
        langs_wrapper.classList.toggle('show');
        setTimeout(function() {
            langs_wrapper.classList.toggle('active');
        }, 10);
    }
    // Скрытие поля
    else {
        langs_wrapper.classList.toggle('active');
        setTimeout(function() {
            langs_wrapper.classList.toggle('show');
        }, 400);
    }
});

// Текущий язык
const current_lang = document.querySelector('#current_lang');
// Список всех языков
const lang_items_array = document.querySelectorAll('.lang_item');

// ПРобегаемся по всем элементам
lang_items_array.forEach(function(item) {
    // Обработка клика на элемент
    item.addEventListener('click', function() {
        // Получаем выбранный язык
        let lang_value = item.querySelector('.lang_value').textContent;
        // Записываем язык в текущий
        current_lang.textContent = lang_value;
    });
});


/* ------------------------ Логика бургер-меню ------------------------ */
// Бургер-кнопка
const burger_menu = document.querySelector('#burger_menu');
// Шапка
const header = document.querySelector('#header');
// Меню со ссылками
const nav_menu = document.querySelector('#nav_menu');
// Кнопки в шапке
const header_tools = document.querySelector('#header_tools');

// Обработка клика на бургер
burger_menu.addEventListener('click', function() {
    // Изменяем видимость
    this.classList.toggle('active');
    header.classList.toggle('active');
    nav_menu.classList.toggle('active');
    header_tools.classList.toggle('hide');
    document.body.classList.toggle('no_scroll');
});