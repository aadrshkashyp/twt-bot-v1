const CronJob = require("cron").CronJob;
const randomTweet = require("./randomTweet");
const { postTweet } = require("./bot");

// Get random tweet from randomtweet.js
function getTweet() {
  return randomTweet.TWEET[
    Math.floor(Math.random() * randomTweet.TWEET.length)
  ];
}

//Cron Job Setup
new CronJob(
  "* 8,16,20 * * *", // Running a cron job 3 times (8 am, 4 pm and 8 pm) everyday, for more - https://crontab.guru/
  function () {
    postTweet(getTweet());
  },
  null,
  true,
  "Asia/Kolkata" //Time Zone
);
