/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [

  {
    "quote": "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
    "source": "Walt Disney"
  },
  {
    "quote": "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
    "source": "Rob Siltanen"
  },
  {
    "quote": "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "source": "James Cameron"
  },
  {
    "quote": "When you reach the end of your rope, tie a knot and hang on.",
    "source": "Abraham Lincoln"
  },
  {
    "quote": "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy",
    "source": "Martin Luther King Jr.",
    "citation": "Strength to Love", 
    "year": "1963"
  },
];





/***
 * `getRandomQuote` function
***/
function getRandomQuote() {

  let randomNumber = Math.floor((Math.random() * quotes.length));
  return quotes[randomNumber];
}



/***
 * `printQuote` function
***/

function printQuote(){

  let RadQuote = getRandomQuote();
  let htmlString = `<p class="quote">${RadQuote.quote}</p>;`
  htmlString += `<p class="source">${RadQuote.source};`
  if(RadQuote.citation != null){

    htmlString += `<span class='citation'>${RadQuote.citation}</span>`;
  }
  if(RadQuote.year != null){

    htmlString +=  `<span class='year'>${RadQuote.year}</span>`;

  }
  htmlString += `</p>`;

  return document.getElementById('quote-box').innerHTML = htmlString;
}
document.getElementById('quote-box').innerHTML = printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);