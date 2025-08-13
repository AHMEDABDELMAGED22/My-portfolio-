const quotes = [
  { text: 'In complete darkness we are all the same, it is our knowledge and wisdom that separates us. Don\'t let your eyes deceive you.', author: 'Janet Jackson' },
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { text: 'Success is not the key to happiness. Happiness is the key to success.', author: 'Albert Schweitzer' },
  { text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' },
  { text: 'You miss 100% of the shots you don\'t take.', author: 'Wayne Gretzky' }
];
function showQuote(idx) {
  document.getElementById('quoteText').textContent = quotes[idx].text;
  document.getElementById('quoteAuthor').textContent = quotes[idx].author;
}
function randomQuote() {
  return Math.floor(Math.random() * quotes.length);
}
let current = randomQuote();
showQuote(current);
document.getElementById('newQuoteBtn').onclick = function() {
  current = randomQuote();
  showQuote(current);
};
document.getElementById('copyBtn').onclick = function() {
  navigator.clipboard.writeText(quotes[current].text + ' - ' + quotes[current].author);
};
document.getElementById('twitterBtn').onclick = function() {
  const url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quotes[current].text + '" - ' + quotes[current].author);
  window.open(url, '_blank');
};
document.getElementById('listenBtn').onclick = function() {
  const utter = new SpeechSynthesisUtterance(quotes[current].text + ' by ' + quotes[current].author);
  window.speechSynthesis.speak(utter);
};
