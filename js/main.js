"use strict"; // for svg support

svg4everybody(); //for loader

var loader = document.getElementById('form-loader');

function loaderShow() {
  loader.classList.add('loading');
}

function loaderHide() {
  loader.classList.remove('loading');
}