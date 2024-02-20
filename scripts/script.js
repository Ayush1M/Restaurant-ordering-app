import menuArray from "./data.js";
import { cart, addToCart } from "./cart.js";

let menuArrayHtml = "";

menuArray.forEach((menu) => {
  menuArrayHtml += `
  <div class="flex-container">
      <div class="item-container">
          <h2 class="item-image">${menu.emoji}</h2>
         <div>
              <h2 class="item-name">${menu.name}</h2>
              <p class="item-ingredients">${menu.ingredients}</p>
              <p class="item-price">$${menu.price}</p>
         </div>
        </div>
      <button class="add-to-cart js-add-to-cart" data-food-id="${menu.id}">+</button>
    </div>
    `;
});

document.querySelector(".menu-item").innerHTML = menuArrayHtml;

function updateCartQuantity(){
  
  let cartQuantity = 0

  cart.forEach((item) =>{
    cartQuantity += item.quantity
  })
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity
  
}

document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
  button.addEventListener("click" , ()=>{
    const foodId = button.dataset.foodId
    addToCart(foodId)
    updateCartQuantity()
  })
})
