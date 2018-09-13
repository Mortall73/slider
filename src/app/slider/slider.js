'use strict';

export default class Slider {
    /**
     * 
     * @param {String} elementName - уникальный идентификатор элемента
     * @param {Object} options - объект настроек слайдера {
     *  visible_max - Number сколько слайдов отображать (по умолчанию 1),
     *  sliders_to_scroll - Number сколько слайдев скролить (по умолчанию 1),
     *  transition - Number время скролла в милисек. (по умолчанию 1000 || 1s),
     *  slider_align - String выравнивание слайдов (по умолчанию bottom) : bottom, top, middle
     * }
     */
    constructor(elementName, options) {

        this.slider_el = document.querySelector(elementName);
        this.slider_el_width = this.slider_el.offsetWidth;
        this.slider_list = document.createElement('div');
        this.slider_list_width = 100; // по дефолту 100%
        this.sliders = this.slider_el.children;
        this.sliders_count = this.sliders.length;
        this.visible_max = options.visible_max || 1;
        this.sliders_to_scroll = options.sliders_to_scroll || 1;
        this.transition = options.transition || 1000; // ms
        this.slide_width = Math.ceil(this.slider_el_width/this.visible_max);
        this.slider_list_shift = this.slide_width*this.sliders_to_scroll;
        this.slider_align = options.slider_align || 'bottom';

        /** Хранение смещения слайдера */
        this.slider_list_position = 0;

        /** Хранение проскролленых сладов */
        this.scroll_sliders_count = 0;

        this.hasNext = true;
        this.hasPrev = false;
        
        this.next_button = document.createElement('div');
        this.next_button.className = 'js-slider-btn js-slider-btn--next';

        this.prev_button = document.createElement('div');
        this.prev_button.className = 'js-slider-btn js-slider-btn--prev';    


        this.init();

        this.resizeSlider();
    }
    /**
     * @description инициализация слайдера
     */
    init() {

        /** Установка длины контейнера для слайдов */
        this.slider_list_width = Math.round(this.slide_width*this.sliders_count);

        this.slider_list.className = 'js-slider-list';
        this.slider_el.classList.add('js-slider');

        if (this.sliders_count > 0) {

            this.slider_list.style.width =  `${this.slider_list_width}px`;

            /** Класс задающий выравнивание элементов */
            this.slider_list.classList.add(`js-slider-list--${ this.slider_align}`);

            [].forEach.call(this.sliders, (slider_el) => {

                slider_el.classList.add('js-slider-item');
                slider_el.style.width = `${this.slide_width}px`;

            });

            this.wrapAll(this.sliders, this.slider_list);

            if (this.sliders_count > 1) {
                this.slider_el.appendChild(this.next_button);
                this.slider_el.appendChild(this.prev_button);

                /** стрелочная функция сохраняет контекст this на классе Slider иначе this = button */
                this.next_button.addEventListener('click', () => { 
                    this.next();
                });
                this.prev_button.addEventListener('click', () => {
                    this.prev();
                });
            }

        }

        /**
         * Установка активности кнопок
         */
        this.stopScroll();
    }

    /**
     * @description оборачивает элементы в wrapper, (аналог wrapAll JQuery)
     * @param {Element} elements - элементы которые нужно обернуть в wrapper
     * @param {Element} wrapper - оберточный блок
     */
    wrapAll(elements, wrapper) {

        let el = elements.length ? elements[0] : elements;

        let parent  = el.parentNode;
        let sibling = el.nextSibling;

        wrapper.appendChild(el);

        while (elements.length) {
            wrapper.appendChild(elements[0]);
        }

        if (sibling) {
            parent.insertBefore(wrapper, sibling);
        } else {
            parent.appendChild(wrapper);
        }
    }

    next() {
        if (this.hasNext) {

            this.scroll_sliders_count += this.sliders_to_scroll;
            this.slider_list_position += this.slider_list_shift;

            this.slider_list.style.cssText = `-webkit-transform: translateX(-${this.slider_list_position}px);
                                            -ms-transform: translateX(-${this.slider_list_position}px);
                                            transform: translateX(-${this.slider_list_position}px);
                                            -webkit-transition: all ${this.transition}ms linear;
                                            -o-transition: all ${this.transition}ms linear;
                                            transition: all ${this.transition}ms linear;`;
        }
        this.stopScroll();
        
    }

    prev() {
        if (this.hasPrev) {

            this.slider_list_position -= this.slider_list_shift;
            this.scroll_sliders_count -= this.sliders_to_scroll; 

            this.slider_list.style.cssText = `-webkit-transform: translateX(-${this.slider_list_position}px);
                                            -ms-transform: translateX(-${this.slider_list_position}px);
                                            transform: translateX(-${this.slider_list_position}px);
                                            -webkit-transition: all ${this.transition}ms linear;
                                            -o-transition: all ${this.transition}ms linear;
                                            transition: all ${this.transition}ms linear;`;
            
        }
        this.stopScroll();
        
    }

    stopScroll() {
        if ( this.scroll_sliders_count >= this.sliders_count - 1 ) {
            
            this.next_button.classList.add('js-slider-btn--disable');
            this.hasNext = false;
        } else {
            this.next_button.classList.remove('js-slider-btn--disable');
            this.hasNext = true;
        }

        if (this.scroll_sliders_count <= 0) {

            this.prev_button.classList.add('js-slider-btn--disable');
            this.hasPrev = false;
        } else {
            this.prev_button.classList.remove('js-slider-btn--disable');
            this.hasPrev = true;
        }
    }
    resizeSlider() {
        window.addEventListener('resize', () => {
            /** Пересчет величин зависящих от длины слайдера */
            this.slider_el_width = this.slider_el.offsetWidth;
            this.sliders = this.slider_list.children;
            this.slide_width = Math.ceil(this.slider_el_width/this.visible_max);
            this.slider_list_width = Math.round(this.slide_width*this.sliders_count);
            this.slider_list.style.width =  `${this.slider_list_width}px`;
            this.slider_list_shift = this.slide_width*this.sliders_to_scroll;

            /** Коррекировка позиции слайдера  */
            if (this.sliders_to_scroll != 1) {
                this.slider_list_position = (this.scroll_sliders_count * this.slider_list_shift )/ this.sliders_to_scroll;
            } else {
                this.slider_list_position = this.scroll_sliders_count * this.slider_list_shift;
            }
            
            if (this.scroll_sliders_count > 0) {
                this.slider_list.style.cssText = `-webkit-transform: translateX(-${this.slider_list_position}px);
                                            -ms-transform: translateX(-${this.slider_list_position}px);
                                            transform: translateX(-${this.slider_list_position}px);
                                            -webkit-transition: all ${this.transition}ms linear;
                                            -o-transition: all ${this.transition}ms linear;
                                            transition: all ${this.transition}ms linear;`;
            }

            [].forEach.call(this.sliders, (slider_el) => {

                slider_el.style.width = `${this.slide_width}px`;

            });

        });
    }
    
};