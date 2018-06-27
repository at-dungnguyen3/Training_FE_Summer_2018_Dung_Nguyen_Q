var product_ids = localStorage.getItem('product_ids');
var list_id = product_ids == null ? [] : JSON.parse(product_ids);
var cart_list = document.getElementsByClassName('cart-list');

//check id in localstorage and show product
function initCart() {
  if (list_id.length == 0) {
    cart_list[0].style.display = "none";
    var content = document.getElementsByClassName('main-content');
    content[0].appendChild(document.createElement('h3'));
    var message = content[0].getElementsByTagName('h3'); 
    message[0].setAttribute('class', 'no-item');
    message[0].innerHTML = 'Your cart is currently empty.';
  } else {
    var number_of_cart_items = document.getElementsByClassName('total-items');
    number_of_cart_items[0].innerHTML = list_id.length;
    var cart_content = document.getElementById('cart-content');
    var prices = 0;
    for (var i = 0; i < products.length; i++) {
      for (var j = 0; j < list_id.length; j++) {
        if (list_id[j] == products[i].id) {
          cart_content.innerHTML += '<tr class="cart-item"><td class="product-id">' + products[i].id + '</td>'
          + '<td class="product-image"><img src="' + products[i].image + '"></td>'
          + '<td class="product-name">' + products[i].name +'</td>'
          + '<td class="product-quantity">1</td>'
          + '<td class="product-action"><span class="btn-remove"><img src="images/remove.jpeg"></span></td></tr>'
          prices += products[i].price;
        }
      }
    }
    document.getElementById('total-price').innerHTML = prices + " VNĐ";
  }
}

//remove product
function removeItem() {
  var btn_remove = document.getElementsByClassName('btn-remove');
  for (var k = 0; k < btn_remove.length ; k++) {
    btn_remove[k].addEventListener('click', function() {
      if (confirm('Do you want to remove this product?')) {
        var tr = this.parentElement.parentElement;
        var id = tr.getElementsByClassName('product-id');
        list_id.splice(list_id.indexOf(id[0].innerHTML), 1);
        localStorage.setItem('product_ids', JSON.stringify(list_id));
        location.reload();
      }
    });
  }
}

initCart();
removeItem();
