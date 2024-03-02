import { cart } from "./cart.js"
import { getFood } from "./data.js"

export function paymentSummary(){
    let cartQuantity = 0
    let foodPrice = 0
    let tax = 0

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    })

    cart.forEach((cartItem) => {
        const foodId = cartItem.foodId
        const matchedItem = getFood(foodId)
        foodPrice += matchedItem.price * cartItem.quantity
        tax = foodPrice * 0.1
    })

    const paymentSummary = `
        <div class="payment-container">
               <h2 class="payment-title">Your order</h2>
           <div class="payment-items">
               <p>Items(${cartQuantity}) :</p>
                
               <p>$${foodPrice}</p>
           </div>
           <div class="tax">
               <p>Tax(10%) : </p>
               <p>$${tax.toFixed(2)}</p>
           </div>
           <div class="payment-total">
               <p>Total : </p>
               <p>$${foodPrice + tax}</p>
           </div>
           <button class="payment-btn js-payment-btn">Complete your order</button>
        </div>
    `
    document.querySelector(".js-payment-summary").innerHTML = paymentSummary

    const paymentContainer = document.querySelector(".payment-container")

    if(cart.length > 0){
        paymentContainer.style.display = "block"
    }
}
paymentSummary()