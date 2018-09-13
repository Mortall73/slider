'use strict';

import Slider from './slider/slider.js';

new Slider('.slider', {
    sliders_to_scroll: 1,
    transition: 500,
    visible_max: 1,
    slider_align: "bottom"
});