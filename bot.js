require("dotenv").config();
const { Telegraf } = require("telegraf");

const modulBerhenti = require("./modul/berhenti");
const modulJadwal = require("./modul/jadwal");
const modulBiaya = require("./modul/biaya");

console.log(process.env.TELEGRAM_BOT_TOKEN ? "Token Terbaca!" : "Token KOSONG!");

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.use((ctx, next) => {
  if (ctx.message && ctx.message.text) {
    const pengguna = ctx.from.username ? `@${ctx.from.username}` : ctx.from.first_name;
    console.log(`[PANTAU] ${pengguna} bertanya: ${ctx.message.text}`);
  }
  return next();
});

bot.catch((err, ctx) => {
  console.log(err);
});

bot.start((ctx) => {
  ctx.reply(
    "Oi! Aku asisten virtual Admin Bimbel Aksi. Kamu pasti Admin baru yah? Aku bisa bantu jawab pertanyaan seputar SPP, jadwal, dan info lainnya nih kalo misal kamu belum tahu. Coba ketik pertanyaanmu ya!"
  );
});

modulBerhenti(bot);
modulJadwal(bot);
modulBiaya(bot);

bot.launch().then(() => {
  console.log("Bot sudah konek ke Telegram!");
}).catch((err) => {
  console.log(err);
});