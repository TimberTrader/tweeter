/*
 * Client-side JS logic goes here  jQuery is already loaded
 */


$(document).ready(function() { 

// post form for tweet
const $form = $(aTweet);

$form.on('submit', function(event) {
    evt.preventDefault();
    $.ajax({
        url: '/tweets/',
        data: $(this).serialize(),
        method: 'POST',
        success: loadTweets
        });
 })

function loadTweets() {
    $.ajax({
        url: '/tweets/',
        method: 'GET',
        success: renderTweets
    });
}
// takes dataObject and maps to the html template representing a tweet
function createTweetElement(tweetData) {
    return (
     `<article class="tweet" action=/tweets>
        <header>
            <img class="avatar" src= ${tweetData.user.avatars.small}>
            <h2 class="user">${tweetData.user.name}</h2>
            <p class="handle">${tweetData.user.handle}</p>
        </header>  
        <div>${tweetData.content.text}</div> 
            <footer>${tweetData.created_at}</footer>
        </article>`
        )};
   
function renderTweets(tweet) {
    console.log('tweet', tweet)
    tweet.forEach(tweet => {
        let twtHTML = createTweetElement(tweet);
    $("#tweets-container").prepend(twtHTML)
    });
  };
})

renderTweets();
