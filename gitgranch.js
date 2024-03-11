const prompt = require('prompt-sync')({sigint: true});

const ecommerceProduct = [
    {
        productId: "12345if",
        productName: "sugar",
        productQuantity: 20,
        productPrice: 4000,
    },
    {
        productId: "62345ef",
        productName: "garri",
        productQuantity: 15,
        productPrice: 8000,
    },
    // Add other product details here...
];

const cart = [];

function displayProducts() {
    for (const product of ecommerceProduct) {
        console.log(`${product.productId} ${product.productName} and price is ${product.productPrice}, available quantity: ${product.productQuantity}`);
    }
}

function addToCart(itemID, quantity) {
    const selectedProduct = ecommerceProduct.find((item) => item.productId === itemID);
    if (selectedProduct && (selectedProduct.productQuantity >= quantity)) {
        cart.push({
            productId: selectedProduct.productId,
            productName: selectedProduct.productName,
            productPrice: selectedProduct.productPrice,
            quantity: quantity
        });
        console.log(selectedProduct.productName + " Item added to cart");
    } else {
        console.log("Sorry.... Invalid Product or Quantity");
    }
}

function displayCart() {
    for (const item of cart) {
        console.log(`Product ID: ${item.productId}, Product Name: ${item.productName}, Quantity: ${item.quantity}, Price: ${item.productPrice}`);
    }

    const total = cart.reduce((total, item) => total + item.productPrice * item.quantity, 0);
    console.log(`The total price of the products you purchased is $ ${total}`);
}

function startShopping() {
    console.log("Welcome to the DigiShops built by Js Module guys....");
    console.log("These are the available Items in stock");
    displayProducts();

    while (true) {
        const choice = prompt("Enter your preference: ");

        if (choice.toLowerCase() === "checkout") {
            displayCart();
            break;
        }

        const [productId, quantity] = choice.split(" ");
        addToCart(productId, parseInt(quantity));
    }
}

startShopping();