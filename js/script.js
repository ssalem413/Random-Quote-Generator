/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Samir Salem
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
    "source": "Martin Luther King Jr",
    "citation": "Strength to Love", 
    "year": "1963"
  },
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {

  let randomNumber = Math.floor((Math.random() * quotes.length));
  
  //returns random quote
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote(){

  let radQuote = getRandomQuote(); //get random quote

  //html string to display quote
  let htmlString = `<p class="quote">${radQuote.quote}</p>`
  htmlString += `<p class="source">${radQuote.source}`

  //if citation property is present in the object
  if(radQuote.citation != null){

    //concat to the html String
    htmlString += `<span class='citation'>${radQuote.citation}</span>`;
  }

  //if year property is present
  if(radQuote.year != null){

    //concat to the html String
    htmlString +=  `<span class='year'>${radQuote.year}</span>`;

  }
  //end html string
  htmlString += `</p>`;

  //uodates html with random quote 
  return document.getElementById('quote-box').innerHTML = htmlString;
}

//calls the function to display the random quote
printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);