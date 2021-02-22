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
//for select country
// $(document).ready(function () {
//     var selectCountry = $("#selectCountry");
//     $.getJSON("https://raw.githubusercontent.com/Mansurkhoja/insof/c2f6722099f6fa38d93289d8e73580025cfdd371/rates_nn.json", function (data) {
//         var countriesOption=[];
//         console.log(data);
//         $.each(data, function (id,eachcountry) {
//             countriesOption.push("<option value='"+eachcountry.Country+"'>"+eachcountry.Operator+" "+eachcountry.Country+"</option");
//         });
//         selectCountry.html(countriesOption.join(""));
//     })
// })
// $('body').on('change', $('#selectCountry'), function() {
// });
var selectCountry = $('#selectCountry');
var countries = $('[data-country]');
selectCountry.change(function(){
    var curCountry = $(this).val();
    console.log(curCountry);
    if (curCountry == 'all') {
        countries.show()
    }else{
        countries.each(function () {
            let country = $(this).data('country');
            if (country != curCountry) {
                $(this).hide()
            } else {
                $(this).show()
               
            }
        });
    }
})
