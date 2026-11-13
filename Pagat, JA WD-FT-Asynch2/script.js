
let isOpen = true;

const restaurantName = "Spooky Bites";

const prices = {
  "Spider Pizza": 150,
  "Pumpkin Pasta": 180,
  "Ghost Burger": 120
};

function generateGreeting() {
    const name = document.getElementById("customer").value.trim();
    const greeting = document.getElementById("greeting");

    if (name === "") {
        greeting.textContent = "Please enter your name first!";
        return;
    }

    const greetings = [
        "Boo! " + name + ", welcome to " + restaurantName + "!",
        "Hey " + name + "! Come hungry, leave haunted!",
        "Welcome, " + name + "! Our food is scarier than our ghosts!",
        name + ", the zombies are waiting. Better eat fast!",
        "Greetings, " + name + "! Even Dracula loves our food!",
        "Careful, " + name + "! Our meals are frighteningly delicious!",
        "Welcome, " + name + "! No tricks, just treats!",
        name + ", your stomach called. It wants something spooky!",
        "Boo to you, " + name + "! Enjoy your creepy cravings!",
        "Happy Halloween, " + name + "! Don't let the food bite back!"
    ];

    const randomIndex = Math.floor(Math.random() * greetings.length);

    greeting.textContent = greetings[randomIndex];
}

function calculateDiscount(total) {
  let discount = 0;

  if (total >= 300) {
    discount = total * 0.10;
  }

  return discount;
}

function recommendMeal() {
  const meal = document.getElementById("meal").value;
  const quantity = Number(document.getElementById("quantity").value);
  const recommendation = document.getElementById("recommendation");

  if (!Number.isInteger(quantity) || quantity < 1) {
    recommendation.textContent = "Enter a valid quantity to get a recommendation.";
    return;
  }

  const total = prices[meal] * quantity;

  if (total >= 500) {
    recommendation.textContent =
      "Monster Feast! We recommend our Ghost Burger for your next meal!";
  } else if (total >= 300) {
    recommendation.textContent =
      "Great choice! You should also try our Pumpkin Pasta!";
  } else {
    recommendation.textContent =
      "Complete your spooky meal with our Spider Pizza!";
  }
}

function placeOrder() {
  const name = document.getElementById("customer").value.trim();
  const meal = document.getElementById("meal").value;
  const quantity = Number(document.getElementById("quantity").value);
  const result = document.getElementById("result");

  if (name === "") {
    alert("Please enter your name!");
    return;
  }

  if (!Number.isInteger(quantity) || quantity < 1) {
    alert("Please enter a valid quantity!");
    return;
  }

  if (!isOpen) {
    alert("Our restaurant is currently CLOSED. Please come back later!");
    return;
  }

  const subtotal = prices[meal] * quantity;
  const discount = calculateDiscount(subtotal);
  const finalTotal = subtotal - discount;

  const message =
    "Hello " + name + "!" +
    "\n\nORDER DETAILS" +
    "\nMeal: " + meal +
    "\nQuantity: " + quantity +
    "\nSubtotal: ₱" + subtotal +
    "\nDiscount: ₱" + discount +
    "\nAmount Due: ₱" + finalTotal +
    "\n\nDo you want to confirm this order?";

  if (confirm(message)) {
    result.textContent =
      "Order Successfully Processed! " +
      "Thank you, " + name + "! " +
      "You ordered " + quantity + " " + meal +
      ". Subtotal: ₱" + subtotal +
      ". Discount: ₱" + discount +
      ". Final Amount: ₱" + finalTotal +
      ". Happy Halloween!";

  } else {
    result.textContent =
      "Order cancelled. You can place another order anytime!";
  }
}

function updateStatus() {
  const status = document.getElementById("status");
  const toggleButton = document.getElementById("toggleStatus");

  if (isOpen) {
    status.textContent = "Restaurant Status: OPEN";
    toggleButton.textContent = "Close Restaurant";
  } else {
    status.textContent = "Restaurant Status: CLOSED";
    toggleButton.textContent = "Open Restaurant";
  }
}

function toggleRestaurant() {
  isOpen = !isOpen;
  updateStatus();
}

document.getElementById("greetingBtn")
  .addEventListener("click", generateGreeting);

document.getElementById("orderBtn")
  .addEventListener("click", placeOrder);

document.getElementById("toggleStatus")
  .addEventListener("click", toggleRestaurant);

document.getElementById("meal")
  .addEventListener("change", recommendMeal);

document.getElementById("quantity")
  .addEventListener("input", recommendMeal);

updateStatus();
recommendMeal();
