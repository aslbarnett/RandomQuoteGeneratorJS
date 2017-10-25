/* -+-+-+------------------------------+-+-+-
Data
-+-+-+------------------------------+-+-+-*/

// background colors array
var backgroundColors = [
    '#36B55C',
    '#F2C14E',
    '#F78154',
    '#B4436C',
    '#34252F'
];

// quotes array
var quotes = [
    {
        quote: 'Oi with the poodles already',
        source: 'Lorelai Gilmore',
        citation: 'Gilmore Girls',
        date: 2001,
        tags: 'humour',
        mood: 'happy'
    },
    {
        quote: 'If you think a thing is impossible, you\'ll only make it impossible',
        source: 'Bruce Lee',
        tags: 'motivational'
    },
    {
        quote: 'No one can make you feel inferior without your consent',
        source: 'Eleanor Roosevelt',
        tags: 'politics',
        mood: 'focused'
    },
    {
        quote: 'Once something is a passion, the motivation is there',
        source: 'Michael Schumacher',
        tags: 'motivational'
    },
    {
        quote: 'Strive not to be a success, but rather to be of value',
        source: 'Albert Einstein',
        date: 2065
    }
];

/* -+-+-+------------------------------+-+-+-
Functions
-+-+-+------------------------------+-+-+-*/

// returns random quote
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// returns random background color
function getRandomBackgroundColor() {
    return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
}

// gets random quote and creates html string for displaying
// gets background color to change color on the background of body and background of button
function printQuote() {
    var randomQuote = getRandomQuote();
    var randomBackgroundColor = getRandomBackgroundColor();

    var quoteString = '';
    quoteString += '<p class="quote">' + randomQuote.quote + '</p>';
    quoteString += '<p class="source">' + randomQuote.source;
    if (randomQuote.citation) {
        quoteString += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if (randomQuote.date) {
        quoteString += '<span class="other">' + randomQuote.date + '</span>';
    }

    if (randomQuote.tags) {
        quoteString += '<span class="other">' + randomQuote.tags + '</span>';
    }

    if (randomQuote.mood) {
        quoteString += '<span class="other">' + randomQuote.mood + '</span>';
    }
    quoteString += '</p>';
    document.getElementById('body').style.backgroundColor = randomBackgroundColor;
    document.getElementById('loadQuote').style.backgroundColor = randomBackgroundColor;
    document.getElementById('quote-box').innerHTML = quoteString;
}

// prints quote to screen when window loads
printQuote();

// changes quote and background color every 5 seconds
window.setInterval(printQuote, 5000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

