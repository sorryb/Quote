async function displayQuote() {
  let quote;

  try {
    // Fetch quote object from API
    let response = await fetch(`/api/httpTriggerQuotesFunction`); 
    quote = await response.json();

    // Preload image
    response = await fetch(quote.image);
    const image = await response.blob()
    quote.image = URL.createObjectURL(image);
  } catch (error) {
    quote = { text: `Could not get quote: ${error.message}` };
  }

  // Update background image
  document.body.style.background = quote.image ? `url(${quote.image}) center / cover` : '#f43';

  // Update text
  const div = document.getElementById('quote');
  div.textContent = quote.text;
}
async function displayWords()
{
 // const {test} = await( await fetch(`/api/httpTriggerWaitAMomentFunction?name=sorin`)).json();

var  textOfQuote;
  //let response = await fetch(`/api/httpTriggerWaitAMomentFunction?name=sorin1`);
  let response = await fetch(`/api/httpTriggerWaitAMomentFunction`); 
  if (response.headers.get('content-type').includes('application/json')) {
     textOfQuote = await response.json();
    console.log(textOfQuote.message);
} else {
     textOfQuote = await response.text();
    console.log(textOfQuote.message);  // This will output the plain text: "Hello, sorin1!"
}
  document.querySelector('#name').textContent = textOfQuote.message;
}

displayQuote();
displayWords();
