const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuote = document.getElementById('new-button');

let posts = [];
// add Quote data from API
// const apiProxy = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://jsonplaceholder.typicode.com';

//feel the array posts with api data
fetch(`${apiUrl}/posts`)
    .then((result) => result.json())
    .then((data) => {
        data.forEach(element =>
            posts.push(element));

    });


// fonction qui permet de selectionner des quote de facon aleatoire
// et charge la page.
function getQuote() {
    try {
        const i = Math.floor(Math.random() * posts.length);

        if (posts[i].title === '') {
            quoteAuthor.innerText = 'unknown'
        } else {
            authorText.innerText = posts[i].title;
        }

        if (posts[i].body.length > 100) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = posts[i].body;

        console.log(posts[i].body);

    } catch (e) {

    }
}



//Ajout de fonctionnalite
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}
//event listeners
newQuote.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);
//on load
getQuote();