import { Telegraf } from "telegraf";
import * as truecallerjs from "truecallerjs";

const token = process.env.TG_THIS_BOT_TOKEN;
if (!token) {
  console.error("TG_THIS_BOT_TOKEN is missing!");
  process.exit(1);
}

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
    // Note: Truecaller search requires login installation id / cookies if not logged in.
    // Ensure you have logged in or provided search parameters.
    const searchData = {
      phone: query,
      countryCode: "IN" // Change as per your country if needed
    };
    
    const result = await truecallerjs.search(searchData);
    ctx.reply(JSON.stringify(result, null, 2));
  } catch (error) {
    ctx.reply("Error occurred while searching or not logged in.");
  }
});

bot.launch();
console.log("Bot is running...");
