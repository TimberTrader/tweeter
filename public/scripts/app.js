/*
 * Client-side JS logic goes here  jQuery is already loaded
 */
"use strict"

$(document).ready(function() {

// display all tweets on page reload
$.getJSON({
    url: 'http://localhost:8080/tweets',
    method: 'GET',
    data: {get_param: 'value'},
    success: function (data) {
            renderTweets(data);
            console.log('Success loading original database!');
    }
});

// exposes new-tweet by scolling tweets-container down
$(".button").on("click", function() {
    $(".new-tweet").slideToggle();
    $("textarea").focus();
    $("body").scrollTop(0);
});

// returns array from what is typed into textarea
$('#tweetForm').on('submit', function(e) {
    e.preventDefault();
    //checks for empty (too many chars is  ...
    if ($('.new-tweet textarea').val() === "") {
        $('#empty').html("Start Tweeting!").error
            return false;
    } else if (($('.new-tweet textarea').val()).length > 140) {
                $('#empty').html("You have too many characters!").error
                return false;
    /* now good -> posts to /tweets w/new prop's & calls loadTweets */
    } else {
        $('#empty').html("");
        $.ajax('/tweets', {
            data: $(this).serialize(),
            method: 'POST',
            complete: function() {
                $('.new-tweet textarea').val('');
                $('.counter')[0].innerHTML = '140';
                loadTweets();
            }
        });
    };
});

 // called from above AJAX post request returns all tweets.
function loadTweets() {
    $.ajax('/tweets', { method: 'GET'})
        .then(function(tweets){
            renderTweets(tweets);
    });
}

// prevent malicious scipts entering through text input
function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
};
  
// takes dataObject and maps to the html template representing a tweet
function createTweetElement(tweetData) {
    return (
     `<article class="tweet" action=/tweets>
        <header>
            <img class="avatar" src= ${tweetData.user.avatars.small}>
            <h2 class="user">${tweetData.user.name}</h2>
            <p class="handle">${tweetData.user.handle}</p>
        </header>  
        <div>${escape(tweetData.content.text)}</div> 
        <footer class="footer">
            <abbr class="timeago" title="">${daysSince(tweetData.created_at)}</abbr>
            <img class="icons" src="/images/flag.png">
            <img class="icons" src="/images/repost.png">
            <img class="icons" src="/images/fave.png">
        </footer>
    </article>`
)};
        
/* renders " a single tweet" into a collection  of tweets for "tweets container"
calls tweet element and passes tweet object */
function renderTweets(tweet) {
    tweet.forEach(tweet => {
        let twtHTML = createTweetElement(tweet);
        $("#tweets-container").prepend(twtHTML)
    });
  };
// calaculates # of days since last date
function daysSince (date){
    let days = Math.ceil((Date.now() - date) / 86400000);
    return `${days} days ago`
}

});


