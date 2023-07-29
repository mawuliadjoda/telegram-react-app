const { Telegraf } = require('telegraf');

const TOKEN = '6674210123:AAGtqYo5kTSDuJqcXSmFWUxVyU3JmtcFdVg'

const bot = new Telegraf(TOKEN);
// const bot = new Telegraf(process.env.BOT_TOKEN);


const web_link = "https://64c46313f44549219869a829--papaya-genie-6dd9ff.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();