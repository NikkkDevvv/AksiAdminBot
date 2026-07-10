module.exports = (bot) => {
  bot.hears(/refund|berhenti|keluar/i, (ctx) => {
    ctx.reply(
      "Kalau ada siswa atau ortu yang minta refund atau mau berhenti di tengah jalan, langsung tolak dengan halus ya. Jelasin ke mereka kalau uang SPP tidak bisa di-refund karena sudah dialokasikan untuk beli kelas secara full. Sebisa mungkin kamu bujuk anaknya supaya tetap lanjut dan sayang kalau uangnya sia-sia, jadi maksimalkan aja sisa pertemuannya."
    );
  });
};