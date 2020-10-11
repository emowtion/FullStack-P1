/******************************************

project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
 ***/
let quotes = [{
    quote: 'Tact is the ability to describe others as they see themselves.',
    source: 'Abraham Lincoln',
    citation: '16th president of US',
    year: '(1809 - 1865)'
  },
  {
    quote: "I've come to embrace the notion that I haven't done enough in my life. I've come to confirm that one's title, even a title like president of the United States, says very little about how well one's life has been led. No matter how much you've done or how successful you've been, there's always more to do, always more to learn, and always more to achieve.",
    source: 'Barack Obama',
    citation: '44th President of United States',
    year: '2009'
  },
  {
    quote: "Never spend your money before you have it.",
    source: 'Thomas Jefferson',
    citation: "3rd president of US",
    year: '(1743 - 1826)'
  },
  {
    quote: 'Be patient and calm; no one can catch a fish with anger.',
    source: 'Herbert Hoover',
    citation: '31st president of US',
    year: ' (1874–1964)'
  },
  {
    quote: 'The only thing we have to fear is fear itself.',
    source: 'Franklin D. Roosevelt',
    citation: '32nd president of US',
    year: '(1882–1945)'
  }
];


/***
 * `getRandomQuote` function
 ***/

function getRandomQuote(arr) {

  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber]
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let html = `<p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}</p>`

  if (randomQuote.citation) {
    html += `<span class ="citation"> ${randomQuote.citation} </span>`
  }
  if (randomQuote.year) {
    html += `<span class ="year"> ${randomQuote.year} </span>`
  }


  return document.getElementById('quote-box').innerHTML = html;

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);