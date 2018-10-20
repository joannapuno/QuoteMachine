var quotes = [
    'True humility is not thinking less of yourself; it is thinking of yourself less.',

    'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',

    'There can be no tyrants where there are no slaves.',

    'I can\'t go back to yesterday - because I was a different person then.',

    'People are more difficult to work with than machines. And when you break a person, he can\'t be fixed.'];

var quoteAuthor = [
    'C.S. Lewis',
    'Dr. Seuss',
    'Jose Rizal',
    'Lewis Carroll',
    'Rick Riordan'
];


var nextImages = [
    './img/cslewis.jpg',
    './img/drSeuss.jpg',
    './img/joseRizal.jpg',
    './img/lewisCarroll.jpg',
    './img/rickRiordan.jpg'
];

// Buttons

var backButton = document.getElementById('backButton');
var nextButton = document.getElementById('nextButton');


// Variables for Quote + Author + Author Images

var counter = 0;
document.getElementById('quote').innerHTML = quotes[counter];
document.getElementById('quote-author').innerHTML = quoteAuthor[counter];
document.getElementById('main-img').src = nextImages[counter];

// Changing Quotes + Author + Author Images

function nextQuote() {
    if(counter < quotes.length - 1){ 
        counter++;
    } else {
        counter = 0;
    }
    document.getElementById('quote').innerHTML = quotes[counter]; 
    document.getElementById('quote-author').innerHTML = quoteAuthor[counter];
    document.getElementById('main-img').src = nextImages[counter]; 
}

function backQuote() {
    if(counter === 0){ 
        counter = quotes.length - 1;
    } else {
        counter--;
    }
    document.getElementById('quote').innerHTML = quotes[counter];
    document.getElementById('quote-author').innerHTML = quoteAuthor[counter];
    document.getElementById('main-img').src = nextImages[counter];
}

// Buttons --- Events

nextButton.addEventListener('click', nextQuote);
backButton.addEventListener('click', backQuote);

// Quote Timer
setInterval(nextQuote, 30000);



// Twitter
var tweet = document.getElementById('twitter-share-button');

tweet.addEventListener('click', function(){
    var tweetQuote = '"' + quotes[counter] + '"' + " -- " + quoteAuthor[counter];
    console.log(tweetQuote);
    tweet.setAttribute('href', 'https://twitter.com/intent/tweet?text= ' + tweetQuote);
})




