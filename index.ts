
import { Telegraf } from "telegraf";
import * as truecallerjs from "truecallerjs";
import http from "http";

const token = process.env.TG_THIS_BOT_TOKEN;
if (!token) {
  console.error("TG_THIS_BOT_TOKEN is missing!");
  process.exit(1);
}

// Render ke port check ko satisfy karne ke liye dummy server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bot is running!");
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const bot = new Telegraf(token);

bot.start((ctx) => {
  ctx.reply("Welcome to Truecaller Bot! Send your phone number with country code (e.g., +91XXXXXXXXXX) to search.");
});

bot.on("text", async (ctx) => {
  const query = ctx.message.text.trim();
  if (!query.startsWith("+")) {
    return ctx.reply("Please send a valid phone number starting with '+' (e.g., +91XXXXXXXXXX)");
  }

  try {
    ctx.reply("Searching...");
    const searchData = {
      phone: query,
      countryCode: "IN"
    };
    
    const result = await truecallerjs.search(searchData);
    ctx.reply(JSON.stringify(result, null, 2));
  } catch (error) {
    ctx.reply("Error occurred while searching or not logged in.");
  }
});

bot.launch();
console.log("Telegram Bot is running...");
