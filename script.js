const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");


/*random qoute function */ 
function randomQoute() {
  quoteBtn.innerText = "Loading Quote..";

  /*fetching random quotes/data from the API and parsing it into JS object*/
  fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
    console.log(result);
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote";
  });
}

/*sound button*/
soundBtn.addEventListener("click", ()=> {
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance);
});


quoteBtn.addEventListener("click", randomQoute);