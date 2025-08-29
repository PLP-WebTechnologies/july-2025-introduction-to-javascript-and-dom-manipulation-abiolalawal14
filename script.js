// 💻 Tech Rating Website
// Data store
let techRatings = [
  { name: "Laptop", rating: 4 },
  { name: "Smartphone", rating: 5 },
  { name: "Tablet", rating: 3 }
];

// -------------------
// 🎯 Part 1: Basics
// -------------------
document.getElementById("rateTechBtn").addEventListener("click", () => {
  let tech = prompt("Enter tech name (Laptop, Smartphone, Tablet):");
  let rating = parseInt(prompt("Enter your rating (1-5):"));

  if (rating >= 1 && rating <= 5) {
    techRatings.push({ name: tech, rating: rating });
    document.getElementById("rateResult").textContent =
      `✅ You rated ${tech} as ${rating}/5.`;
  } else {
    document.getElementById("rateResult").textContent =
      "❌ Invalid rating! Please enter a number between 1 and 5.";
  }
});

// -------------------
// ❤️ Part 2: Functions
// -------------------
function calculateAverage(ratings) {
  let sum = 0;
  ratings.forEach(item => sum += item.rating);
  return (sum / ratings.length).toFixed(2);
}

document.getElementById("avgBtn").addEventListener("click", () => {
  let avg = calculateAverage(techRatings);
  document.getElementById("avgResult").textContent =
    `⭐ The average rating of all gadgets is: ${avg}`;
});

// -------------------
// 🔁 Part 3: Loops
// -------------------
document.getElementById("listBtn").addEventListener("click", () => {
  const list = document.getElementById("techList");
  list.innerHTML = "";

  // Loop through techRatings array
  for (let i = 0; i < techRatings.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${techRatings[i].name} - ${techRatings[i].rating}/5`;
    list.appendChild(li);
  }
});

// -------------------
// 🌐 Part 4: DOM Manipulation
// -------------------
document.getElementById("highlightBtn").addEventListener("click", () => {
  const bestTech = techRatings.reduce((prev, current) =>
    prev.rating > current.rating ? prev : current
  );

  document.getElementById("highlightText").textContent =
    `🏆 The best-rated gadget is: ${bestTech.name} with ${bestTech.rating}/5!`;
  document.getElementById("highlightText").style.color = "green";
});
