const quote = document.querySelector('.quote p');
const author = document.querySelector('.author h3');
newQuote = document.querySelector('.newQuote');
const whatsapp = document.querySelector('.whatsapp');






apiUrl = 'https://api.quotable.io/random';

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote(apiUrl);

newQuote.addEventListener('click', () => {
    getQuote(apiUrl);
});


whatsapp.addEventListener('click', () => {
  const message = encodeURIComponent(quote.innerHTML + ' ---by--- '+ author.innerHTML);
  const url = `https://wa.me/?text=${message}`;
  window.open(url, '_blank', "height = 300, width = 600");
});
