import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbarTemplate from './templates/navbar.html';
import mkCarousel from './carousel';
/**
 * Carousel
 */


/**
 * Products
 */
function mkNavCat(items) {
  const objNavbar = $('.mynav');
  objNavbar.empty();
  items.forEach((item) => {
    objNavbar.append(`<li class="nav-item">
  <a class="nav-link" href="#">${item.name}<span class="sr-only">(current)</span></a>
  </li>`);
  });
}

$(() => {
  $.ajax('./static/categories.json')
    .done((categories) => {
      const $carousel = mkCarousel(categories);
      $('#root').append($carousel);
      $carousel.carousel();
      mkNavCat(categories);
    });

  $('#root')
    .append(navbarTemplate);
});
