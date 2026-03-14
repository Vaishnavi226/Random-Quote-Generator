const quotes = [
"Believe in yourself.",
"Success is not final, failure is not fatal.",
"Dream big and dare to fail.",
"Do something today that your future self will thank you for.",
"Hard work beats talent when talent doesn’t work hard.",
"Stay hungry, stay foolish.",
"Great things never come from comfort zones.",
"Push yourself because no one else will do it for you."
];

function generateQuote(){

    const randomNumber = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText = quotes[randomNumber];

}