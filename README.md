# slider

Пример использования:
```javascript
new Slider('.slider', {
    sliders_to_scroll: 1,
    transition: 500,
    visible_max: 1,
    slider_align: "bottom"
});

new Slider(element) - элемент из которого надо сделать слайдер, обязательный аргумент

new Slider(element, options) - options - настройки слайдера:
options {
    visible_max - Number сколько слайдов отображать (по умолчанию 1),
    sliders_to_scroll - Number сколько слайдев скролить (по умолчанию 1),
    transition - Number время скролла в милисек. (по умолчанию 1000 || 1s),
    slider_align - String выравнивание слайдов (по умолчанию bottom) : bottom, top, middle 
}
```
