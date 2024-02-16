import menuArray from "./data.js";

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
      <button class="add-to-cart">+</button>
    </div>
    `;
});

document.querySelector(".menu-item").innerHTML = menuArrayHtml;
