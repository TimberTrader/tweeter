/*
 * Client-side JS logic goes here  jQuery is already loaded
 */
 /*
 fake data below
 */
const Data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];
  

// $(document).ready(function() {

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
// })

renderTweets(Data);
