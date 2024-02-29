import { cart } from "./cart.js"
import { getFood } from "./data.js"

export function paymentSummary(){
    let cartQuantity = 0

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    })

    let foodPrice = 0

    cart.forEach((cartItem) => {
        const foodId = cartItem.foodId
        const matchedItem = getFood(foodId)
        foodPrice += matchedItem.price * cartItem.quantity
    })

    const paymentSummary = `
        <div class="payment-container">
               <h2 class="payment-title">Your order</h2>
           <div class="payment-items">
               <p>Items(${cartQuantity}) :</p> 
               <p>$${foodPrice}</p>
           </div>
           <div class="payment-total">
               <p>Total : </p>
               <p>$${foodPrice}</p>
           </div>
           <button class="payment-btn js-payment-btn">Complete your order</button>
           </div>
    `
    document.querySelector(".js-payment-summary").innerHTML = paymentSummary
}
paymentSummary()