import { cart, removeFromCart} from "./cart.js";
import menuArray from "./data.js";
import { paymentSummary } from "./paymentsummary.js";

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
paymentSummary()

document.querySelectorAll('.js-delete-link').forEach((link) =>{
  link.addEventListener("click" , ()=>{
    const foodId = link.dataset.foodId
    removeFromCart(foodId)
    
    const container = document.querySelector(`.js-checkout-container-${foodId}`)
    container.remove()
    paymentSummary()
    cartEmpty()
  })
})

const payment = document.querySelector(".payment-details")
const closeBtn = document.querySelector(".close-btn")

document.querySelector(".js-payment-btn").addEventListener("click" , () =>{
  payment.style.display = "block"
})

closeBtn.addEventListener("click" , (e) =>{
  e.preventDefault()
  payment.style.display = "none"
})

function cartEmpty(){
  const emptyCart = document.querySelector(".js-empty-cart")

  if(cart.length > 0){
    emptyCart.style.display = "none"
  }else if(cart.length < 1){
    emptyCart.style.display = "block"
  }
  
}
cartEmpty()