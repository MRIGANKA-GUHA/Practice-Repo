document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.999 },
  ];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  let totalPrice = 0;
  const cart = JSON.parse(localStorage.getItem("prod")) || [];
  cart.forEach((item) => {
    renderCart(item);
    console.log(item);
  })

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      cart.push(product);
      addToCart();
      renderCart(product);
    }
  });

  function addToCart() {
    localStorage.setItem("prod", JSON.stringify(cart))
    
  }
 
  function renderCart(item) {
    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        `;
        cartItems.appendChild(cartItem);
        totalPrice += item.price;
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      }
     else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    cartItems.innerText = "";
    alert("Checkout successfully");
    localStorage.removeItem("prod");
    totalPrice= 0;
    cartTotalMessage.classList.add("hidden");
    emptyCartMessage.classList.remove("hidden");
  });
});
