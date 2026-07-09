require("dotenv").config();
const { Telegraf } = require("telegraf");

console.log(process.env.TELEGRAM_BOT_TOKEN ? "Token Terbaca!" : "Token KOSONG!");

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.use((ctx, next) => {
  if (ctx.message && ctx.message.text) {
    const user = ctx.from.username ? `@${ctx.from.username}` : ctx.from.first_name;
    console.log(`[MONITORING] ${user} bertanya: ${ctx.message.text}`);
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

bot.hears(/refund|berhenti|keluar/i, (ctx) => {
  ctx.reply(
    "Kalau ada siswa atau ortu yang minta refund atau mau berhenti di tengah jalan, langsung tolak dengan halus ya. Jelasin ke mereka kalau uang SPP tidak bisa di-refund karena sudah dialokasikan untuk beli kelas secara full. Sebisa mungkin kamu bujuk anaknya supaya tetap lanjut dan sayang kalau uangnya sia-sia, jadi maksimalkan aja sisa pertemuannya."
  );
});

bot.hears(/pindah|cabang|ruang|jadwal/i, (ctx) => {
  ctx.reply(
    "Kalau ada yang bingung soal jadwal atau lokasi ruangan, kasih tau mereka kalau jadwal paten kita itu Senin-Rabu-Jumat atau Selasa-Kamis-Sabtu. Untuk detail pembagian ruangan di Jatwin atau Dr. Angka (kayak ruang Inovasi, Prestasi, dll), pastikan kamu bilang kalau admin bakal selalu infokan H-1 les langsung ke grup WA kelompok belajar mereka masing-masing."
  );
});

bot.hears(/biaya|harga|spp|pricelist|bayar/i, (ctx) => {
  ctx.reply(
    "Untuk info biaya les bulanan (kelas ber-5):\n\nSMP:\n- Kelas 7: 300.000\n- Kelas 8: 330.000\n- Kelas 9: 350.000\n\nSMA:\n- Kelas 10: 370.000\n- Kelas 11: 390.000\n- Kelas 12: 420.000\n\nUTBK (Kelas 12 & Alumni):\n- 450.000\n\n*Catatan: Biaya pendaftaran awal 80.000 per anak. SPP dibayarkan di hari pertama les dan menjadi deadline untuk bulan berikutnya."
  );
});

bot.launch().then(() => {
  console.log("Bot sudah konek ke Telegram!");
}).catch((err) => {
  console.log(err);
});