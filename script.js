const quotes = [
    "The best way to predict the future is to invent it.",
    "Do what you can, with what you have, where you are.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Your time is limited, so don’t waste it living someone else’s life."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
