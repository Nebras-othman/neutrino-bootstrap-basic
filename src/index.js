import $ from 'jquery';
import 'bootstrap/js/src';
import './custom-bootstrap.scss';
import './styles.scss';
import navbar from './templates/navbar.html';

const products = [
  {
    img: 'static/1.jpg', title: 'New title', des: 'Some quick example text to build on the card title and make up the bulk of the cards content.', button: 'Product details',
  },
  {
    img: 'static/2.jpg', title: 'New title', des: 'Some quick example text to build on the card title and make up the bulk of the cards content.', button: 'Product details',
  },
  {
    img: 'static/3.jpg', title: 'New title', des: 'Some quick example text to build on the card title and make up the bulk of the cards content.', button: 'Product details',
  },
  {
    img: 'static/4.jpg', title: 'New title', des: 'Some quick example text to build on the card title and make up the bulk of the cards content.', button: 'Product details',
  },
  {
    img: 'static/5.jpg', title: 'New title', des: 'Some quick example text to build on the card title and make up the bulk of the cards content.', button: 'Product details',
  },
  {
    img: 'static/6.jpg', title: 'New title', des: 'Some quick example text to build on the card title and make up the bulk of the cards content.', button: 'Product details',
  },
];

function mkProduct(img, title, des, button) {
  return `<div class="col-md-4"><div class="card" style="width: 20rem;">
  <img class="card-img-top" src="${img}" alt="Card image cap">
  <div class="card-block">
    <h4 class="card-title">${title}</h4>
    <p class="card-text">${des}</p>
    <a href="#" class="btn btn-primary">${button}</a>
  </div>
  </div>
  </div>`;
}

const productsContiner = ` <div class="container">
  <div class="row">
  ${mkProduct(products[0].img, products[0].title, products[0].des, products[0].button)}
  ${mkProduct(products[1].img, products[1].title, products[1].des, products[1].button)}
  ${mkProduct(products[2].img, products[2].title, products[2].des, products[2].button)}
  ${mkProduct(products[3].img, products[3].title, products[3].des, products[3].button)}
  ${mkProduct(products[4].img, products[4].title, products[4].des, products[4].button)}
  ${mkProduct(products[5].img, products[5].title, products[5].des, products[5].button)}
  </div>
  </div>
  `;

const slider = `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <img class="d-block w-100 col-6" src="${products[0].img}" alt="First slide">
          <div class="col-6 d-flex align-items-center">
            <h3>Big title</h3>
            <p>alot of talking about the product how nice it is and wonderful</p>
            
          </div>
        </div>
     </div>
    </div>
    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <img class="d-block w-100 col-6" src="${products[1].img}" alt="First slide">
          <div class="col-6 d-flex align-items-center">
            <h3>Big title</h3>
            <p>alot of talking about the product how nice it is and wonderful</p>
          </div>
        </div>
     </div>
    </div>
    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <img class="d-block w-100 col-6" src="${products[2].img}" alt="First slide">
          <div class="col-6 d-flex align-items-center">
            <h3>Big title</h3>
            <p>alot of talking about the product how nice it is and wonderful</p>
          </div>
        </div>
     </div>
    </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>`;

$(() => {
  $('#root').append(navbar)
    .append(slider)
    .append(productsContiner);
  // $('.carousel').carousel();
});

