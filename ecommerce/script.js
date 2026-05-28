let cart = [];
let total = 0;

// FILTER PRODUCTS

function filterProducts(category){

    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {

        if(
            category === "all" ||
            product.getAttribute("data-category") === category
        ){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }

    });

}


// ADD TO CART

function addToCart(productName, price){

    cart.push({
        name: productName,
        price: price
    });

    total += price;

    updateCart();

    showNotification(`${productName} added to cart ✅`);

}


// UPDATE CART

function updateCart(){

    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    cart.forEach((item,index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        cartItems.appendChild(li);

    });

    totalPrice.innerText = total;

}


// REMOVE FROM CART

function removeFromCart(index){

    total -= cart[index].price;

    cart.splice(index,1);

    updateCart();

}


// PLACE ORDER

function placeOrder(){

    if(cart.length === 0){
        showNotification("Your cart is empty ❌");
        return;
    }

    cart = [];
    total = 0;

    updateCart();

    showNotification("Order placed successfully 🚀");

}


// SHOW NOTIFICATION

function showNotification(message){

    const notification = document.getElementById("notification");

    notification.innerText = message;

    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    },3000);

}