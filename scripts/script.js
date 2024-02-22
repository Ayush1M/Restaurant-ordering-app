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
        <div class="added-container">
        <div class="added-to-cart js-added-to-cart-${menu.id}"><img src="./images/checkmark.png" alt="checkmark" class="checkmark" />Added</div>
        <button class="add-to-cart js-add-to-cart" data-food-id="${menu.id}"> Add +</button>
        </div>
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

    const addedMessage = document.querySelector(`.js-added-to-cart-${foodId}`)
    addedMessage.classList.add("added-message")

    setTimeout(() => {addedMessage.classList.remove("added-message")}, 1000)
  })
})
