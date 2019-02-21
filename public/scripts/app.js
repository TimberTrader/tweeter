/*
 * Client-side JS logic goes here  jQuery is already loaded
 */

$(document).ready(function() {    

// returns array from what is typed into textarea
$('#tweetForm').on('submit', function(e) {
    e.preventDefault();
    // checks for empty, then too much ...
    // if ($(this).children("textarea").val() == "") {
    //         alert("Your tweet is waiting for your input.")
    //         return false;
    //     } else if ($("textarea").val().length > 140) {
    //         alert("Your tweet has exceeded the 140 character limit.")
    //         return false;
    //     /* now good -> posts to /tweets w/new prop's ... 
    //             & calls loadTweets */
    //         } else {
                $.ajax('/tweets', {
                data: $(this).serialize(),
                method: 'POST',
                complete: function(){
                    loadTweets();
                }
            // })
        })
});

function loadTweets() {
    $.ajax('/tweets', { method: 'GET'})
        .then(function(tweets){
            renderTweets(tweets);
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
 
/* renders " a single tweet" into a collection  of tweets for "tweets container"
  calls tweet element and passes tweet object */
function renderTweets(tweet) {
    console.log('tweet', tweet)
    tweet.forEach(tweet => {
        let twtHTML = createTweetElement(tweet);
    $("#tweets-container").prepend(twtHTML)
    });
  };
})

