const CronJob = require("cron").CronJob;
const animeQuotes = require("./animeQuotes");
const { postTweet } = require("./bot");

function getQuotes() {
  return animeQuotes.QUOTES[
    Math.floor(Math.random() * animeQuotes.QUOTES.length)
  ];
}

new CronJob(
  "* 8,16,20 * * *", // Running a cron job 3 times (8 am, 4 pm and 8 pm) everyday, for more - https://crontab.guru/
  function () {
    postTweet(getQuotes());
  },
  null,
  true,
  "Asia/Kolkata" //Time Zone
);
