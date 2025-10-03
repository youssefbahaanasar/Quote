var quotes = [
    { quote: "Be yourself; everyone else is already taken.", author: 'Oscar Wilde' },
    { quote: "So many books, so little time.", author: 'Frank Zappa' },
    { quote: "You only live once, but if you do it right, once is enough.", author: 'Mae West' },
    { quote: "Be the change that you wish to see in the world.", author: 'Mahatma Gandhi' },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: 'Robert Frost' },
    { quote: "If you tell the truth, you don't have to remember anything.", author: 'Mark Twain' },
    { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: 'Oscar Wilde' },
    { quote: "A friend is someone who knows all about you and still loves you", author: 'Elbert Hubbard' },
    { quote: "Always forgive your enemies; nothing annoys them so much.", author: 'Oscar Wilde' },
    { quote: "We accept the love we think we deserve", author: 'Stephen Chbosky' }
];
var visited=[];
function getRandom() {
    var x = Math.floor(Math.random() * 10);
    if (visited.indexOf(x) == -1) {
        visited.push(x);
        return x;
    }
    if(visited.length==10){
        visited.splice(0);
    }
    return getRandom();
}
function generateQuote() {
    var quoteNumber = getRandom();
    var quote = quotes[quoteNumber];
    document.getElementById('quote').innerHTML =  '"' + quote.quote + '"';
    document.getElementById('author').innerHTML = '--' + quote.author;
}
