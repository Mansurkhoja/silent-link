"use strict";
// for svg support
svg4everybody();
//for loader
var loader = document.getElementById('form-loader');

function loaderShow() {
    loader.classList.add('loading');
}

function loaderHide() {
    loader.classList.remove('loading');
}
//for touch scale plan
var planItem = document.getElementsByClassName('plan__item');
for (let i = 0; i < planItem.length; i++) {
    planItem[i].addEventListener('touchstart', function() {
        planItem[i].classList.add('scale');
    })
    planItem[i].addEventListener('touchend', function() {
        planItem[i].classList.remove('scale');
    })
}