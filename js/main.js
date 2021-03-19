"use strict";
// for svg support
svg4everybody();
//for loader
var loader = document.getElementById("form-loader");

function loaderShow() {
  loader.classList.add("loading");
}

function loaderHide() {
  loader.classList.remove("loading");
}
//for touch scale plan
var planItem = document.getElementsByClassName("plan__item");
for (let i = 0; i < planItem.length; i++) {
  planItem[i].addEventListener("touchstart", function () {
    planItem[i].classList.add("scale");
  });
  planItem[i].addEventListener("touchend", function () {
    planItem[i].classList.remove("scale");
  });
}
//for select country
//https://raw.githubusercontent.com/Mansurkhoja/insof/c2f6722099f6fa38d93289d8e73580025cfdd371/rates_nn.json

var uniqueCountries = [];
var uniqueCountriesOld = [];
var selectOptionsCountry = [];
var selectOptionsCountryOld = [];
var rateInner = [];
var rateNew = $("#rate-new");
var rateInnerOld = [];
var rateOld = $("#rate-old");
var oldRateReady;
var newRateReady;
$(document).ready(function () {
  $.when(
      $.getJSON("https://raw.githubusercontent.com/Mansurkhoja/silent-link/master/js/rates_new.json", function (data) {
        newRateReady = data;
    $.each(data, function (id, dataEach) {
      if ($.inArray(dataEach.Country, uniqueCountries) == -1) {
        uniqueCountries.push(dataEach.Country);
        selectOptionsCountry.push(
          '<option value="' +
            dataEach.Country +
            '">' +
            dataEach.Country +
            "</option>"
        );
      }
      rateInner.push(
        '<div class="rate__block" data-country="' +
          dataEach.Country +
          '">' +
          '<div class=" rate__item rate__name " >' +
          " Mobile Network" +
          "</div>" +
          '<div class=" rate__item rate__data ">' +
          dataEach.Operator +
          "</div>" +
          '<div class=" rate__item rate__name " >' +
          "Price per 1 MB" +
          "</div>" +
          '<div class=" rate__item rate__data ">' +
          JSON.stringify(dataEach["DATA (MB)"]).substring(0, 6) +
          "</div>" +
          '<div class=" rate__item rate__name " >' +
          "SMS" +
          "</div>" +
          '<div class=" rate__item rate__data ">' +
          JSON.stringify(dataEach.SMS).substring(0, 6) +
          "</div>" +
          '<div class=" rate__item rate__name " >' +
          "Data Increment (KB)" +
          "</div>" +
          '<div class=" rate__item rate__data ">' +
          dataEach["Data Increment (KB)"] +
          "</div>" +
          "</div>"
      );
    });
    rateNew.append(rateInner.join(""));
    $("#selectCountry").append(selectOptionsCountry.join(""));
  }).done(function () {
    $("#rateLoader").remove();
  }),
  $.getJSON("https://raw.githubusercontent.com/Mansurkhoja/silent-link/master/js/rates_old.json", function (data) {
    oldRateReady = data;
    $.each(data, function (id, dataEach) {
      if ($.inArray(dataEach.Country, uniqueCountriesOld) == -1) {
        uniqueCountriesOld.push(dataEach.Country);
        selectOptionsCountryOld.push(
          '<option value="' +
            dataEach.Country +
            '">' +
            dataEach.Country +
            "</option>"
        );
      }
      rateInnerOld.push(
        '<div class="rate__block" data-country-old="' +
          dataEach.Country +
          '">' +
          '<div class=" rate__item rate__name " >' +
          " Mobile Network" +
          "</div>" +
          '<div class=" rate__item rate__data ">' +
          dataEach.Network +
          "</div>" +
          '<div class=" rate__item rate__name " >' +
          "Price per 1 MB" +
          "</div>" +
          '<div class=" rate__item rate__data ">' +
          JSON.stringify(dataEach["Price per 1 MB"]).substring(0, 6) +
          "</div>" +
          "</div>"
      );
    });
    rateOld.append(rateInnerOld.join(""));
    $("#selectCountryOld").append(selectOptionsCountryOld.join(""));
  }).done(function () {
    $("#rateOldLoader").remove();
  })
  ).then(function () {
    if (newRateReady) {
      var selectCountry = $("#selectCountry");
      var countries = $("[data-country]");
      selectCountry.change(function () {
        var curCountry = $(this).val();
        countries.each(function () {
          var country = $(this).data("country");
          if (country != curCountry) {
            $(this).removeClass("show");
          } else {
            $(this).addClass("show");
          }
        });
      });

    }else{
      alert('something went wrong :(')
    }
    if (oldRateReady) {
      var countriesOld = $("[data-country-old]");
      var selectCountryOld = $("#selectCountryOld");
      selectCountryOld.change(function () {
        var curCountryOld = $(this).val();
        countriesOld.each(function () {
          var countryOld = $(this).data("country-old");
          if (countryOld != curCountryOld) {
            $(this).removeClass("show");
          } else {
            $(this).addClass("show");
          }
        });
      });
    }else{
      alert('something went wrong :(')
    }
  })
});