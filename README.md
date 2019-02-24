# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

It was made as a demonstartion of my development skills after three weeks of Lighthouse Lab's
Web Development Bootamp.

It demonstrated the use of development tools such as JQuery & Javascript, CSS, HTML, and mongo (the JS shell for MongoDb).
This application  was built on a Node server / MongoDb databse.
This project also demonstrates the use of .git and Github in managing a project for a sinle developer.

Users are presented with an easy to use interface which allows them to tweet themselves. When the single page application is refreshed all tweets posted to the database are shwon from last post to the earliest post.

Clicking on the compose button reveals a text box to enter a 140 character tweet. Tweeter will warn (and ultimatley won't allow) users to post an empty tweet or to post a tweet over the chaarcter limit. Simpole animatins enhance the user experience.



Pictures of Tweeters two interface staes are shown below.
![tweeter screenshot 1](https://github.com/TimberTrader/imagesforReadMe/blob/master/Screen%20Shot%202019-02-22%20at%203.57.59%20PM.png)
![tweeter screenshot 2](https://github.com/TimberTrader/imagesforReadMe/blob/master/Screen%20Shot%202019-02-22%20at%203.57.59%20PM.png)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies
    -- "body-parser": "^1.15.2",
    -- "chance": "^1.0.2",
    -- "express": "^4.13.4",
    -- "md5": "^2.1.0",
    -- "mongodb": "^2.2.36"
