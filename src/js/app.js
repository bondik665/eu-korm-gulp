console.log('hello app.js');


import * as flsFunctions from "./modules/functions.js";


flsFunctions.isWebp();



//подключение slick-slider
import $ from "jquery";
import "slick-carousel";

$('.carousel').slick({
  dots: true,
  slidesToShow: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1
      }
    }
  ]
});

// slider product-main
$('.carousel2').slick({
  dots: true,
  slidesToShow: 1,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1
      }
    }
  ]
});

// 




// 
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1
      }
    }
  ]
});



$('.responsive-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }
      }
  ]
});
//--------------------------------------
// slider в about-page-slider

$(document).ready(function(){
  console.log("Document ready");
  $(".slider.lazy").slick({
    lazyLoad: "ondemand",
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});

//  отзывы форм
const foot = document.querySelector('.reviews-form');
document.querySelector('.btn-click').addEventListener('click', function () {

  foot.classList.toggle("visible");
})



// фильтр--------------------------------------------------------------------------------
// document.getElementById('filter-button').addEventListener('click', applyFilter);

// function applyFilter() {
//   const foodTypes = getSelectedValues('food-type');
//   const brands = getSelectedValues('brand');
//   const priceRangeMin = document.getElementById('price-range-min').value;
//   const priceRangeMax = document.getElementById('price-range-max').value;
//   const ages = getSelectedValues('age');
//   const sizes = getSelectedValues('size');
//   const flavors = getSelectedValues('flavor');
//   const indications = getSelectedValues('indication');

//   const products = document.querySelectorAll('.product');

//   products.forEach(product => {
//     const showProduct = (
//       (foodTypes.includes('all') || foodTypes.includes(product.dataset.foodType)) &&
//       (brands.includes('all') || brands.includes(product.dataset.brand)) &&
//       (parseFloat(product.dataset.price) >= parseFloat(priceRangeMin) && parseFloat(product.dataset.price) <= parseFloat(priceRangeMax)) &&
//       (ages.includes('all') || ages.includes(product.dataset.age)) &&
//       (sizes.includes('all') || sizes.includes(product.dataset.size)) &&
//       (flavors.includes('all') || flavors.includes(product.dataset.flavor)) &&
//       (indications.includes('all') || indications.includes(product.dataset.indication))
//     );

//     product.style.display = showProduct ? 'block' : 'block';
//   });
// }









