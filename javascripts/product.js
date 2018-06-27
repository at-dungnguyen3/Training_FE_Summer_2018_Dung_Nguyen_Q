var product_list = document.getElementById('product-list');
var number_of_cart_items = document.getElementsByClassName('total-items');
var product_ids = localStorage.getItem('product_ids');
var cart_list = product_ids == null ? [] : JSON.parse(product_ids);

// push data from data.js to html
function initData() {
  for (var i = 0; i < products.length; i++) {
    product_list.innerHTML += '<li class="product-item">'
    + '<div class="product-info" data="' + products[i].id + '">'
    + '<img class="product-image" src="' + products[i].image + '">'
    + '<h3 class="product-name">' + products[i].name + '</h3>'
    + '<p class="product-price">' + products[i].price + ' VNĐ</p>'
    + '<button class="add-to-cart">Add to Cart</button></div></li>';
  }
}

// addEventListener to button add to cart
function addToCart() {
  var btn_add_cart = document.getElementsByClassName('add-to-cart');
  for (var j = 0; j < btn_add_cart.length; j++) {
    btn_add_cart[j].addEventListener('click', function() {
      this.style.visibility = "hidden";
      var product_id = this.parentElement.getAttribute('data');
      cart_list.push(product_id);
      localStorage.setItem('product_ids', JSON.stringify(cart_list));
      var cart_size = cart_list.length;
      number_of_cart_items[0].innerHTML = cart_size;
    });
  } 
}

initData();
addToCart();

// load page with products available in localstorage
window.onload = function() {
  var product_info = document.getElementsByClassName('product-info');
  if (product_ids != null) {
    var listID = JSON.parse(product_ids);
    number_of_cart_items[0].innerHTML = listID.length;
    for (var k = 0; k < product_info.length; k++){
      for (var l = 0; l < listID.length; l++) {
        if (product_info[k].getAttribute('data') == listID[l]) {
          var btn_add_cart = product_info[k].getElementsByClassName('add-to-cart');
          btn_add_cart[0].style.visibility = "hidden";
        }   
      }
    }
  }
}
