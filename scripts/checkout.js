import { cart, removeFromCart} from "./cart.js";
import menuArray from "./data.js";

let cartSummaryHtml = "";

cart.forEach((item) => {
  const foodId = item.foodId;
  let matchedItem

  menuArray.forEach((menuItem) => {
    if (foodId === menuItem.id) {
      matchedItem = menuItem;
    }
  });

  cartSummaryHtml += 
  `
        <div class="checkout-container js-checkout-container-${matchedItem.id}">
        <div class="food-container">
                  <span class="food-quantity">${item.quantity} X </span><h2 class="food-image">${matchedItem.emoji}</h2>
               <div class="food-description">
                  <h2 class="food-name">${matchedItem.name}</h2>                
                  <span class="delete-btn js-delete-link" data-food-id="${matchedItem.id}">Delete</span>
               </div>
        </div>
          <p class="price">$${matchedItem.price}</p>
        </div>
    `;
});

document.querySelector(".js-checkout-page").innerHTML = cartSummaryHtml;

document.querySelectorAll('.js-delete-link').forEach((link) =>{
  link.addEventListener("click" , ()=>{
    const foodId = link.dataset.foodId
    removeFromCart(foodId)

    const container = document.querySelector(`.js-checkout-container-${foodId}`)
    container.remove()
  })
})
