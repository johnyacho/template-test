const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuote = document.getElementById('new-button');

// add Quote data from API
async function getQuote() {
    const apiProxy = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
    try {
        const response = await fetch(apiProxy + apiUrl);
        const data = await response.json();
        if (data.quoteAuthor === '') {
            quoteAuthor.innerText = 'unknown'
        } else {
            quoteAuthor.innerText = data.quoteAuthor;
        }
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;



    } catch (error) {
        getQuote();
    }
}
//Ajout de fonctionnalite
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = quoteAuthor.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}
//event listeners
newQuote.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);
//on load
getQuote();
// async function getQuote() {

//     await fetch("https://qvoca-bestquotes-v1.p.rapidapi.com/quote", {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-host": "qvoca-bestquotes-v1.p.rapidapi.com",
//                 "x-rapidapi-key": "VIEW-ONLY"
//             }
//         })
//         .then(response => {
//             console.log(response);
//             const data = response.json();
//             quoteAuthor.innerText = data.author;
//             quoteText.innerText = data.message;
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }