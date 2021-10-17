let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.querySelector('#main-title').textContent = "DOM Toretto homepage";

  // Part 2
  document.querySelector('body').style.background = "green"
  // Part 3
  document.querySelector("li:last-child").remove('#favorite-things');
       
  // Part 5"
  let ulElem = document.getElementById("past-races")
  // I do not know why but to remove this i had to put 7 insted of 3
  ulElem.removeChild(ulElem.childNodes[7])
  // Part 6
   let node = document.createElement('li')
   let text = document.createTextNode("New York")
   node.appendChild(text);
   document.querySelector("#past-races").appendChild(node)
  // Part 7
 
  let domA = document.querySelector('.main')

  let node1 = document.createElement('Div')
  node1.className = 'blog-post purple'

  let h1 = document.createElement('H1')
  h1.innerText = 'New York'

  let p1 = document.createElement('P')
  p1.innerText = 'I blew somthing up'

  domA.appendChild(node1);
  node1.appendChild(h1);
  node1.appendChild(p1)
// Part 4
//document.querySelectorAll(".special-title").setAttribute("style","font-size: 2rem")
document.querySelector(".special-title").style.fontSize = "2rem"
  

}
document
