require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "Oi! Aku asisten virtual Admin Bimbel Aksi. Kamu pasti Admin baru yah? Aku bisa bantu jawab pertanyaan seputar SPP, jadwal, dan info lainnya nih kalo misal kamu belum tahu. Coba ketik pertanyaanmu ya!",
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

bot.launch();