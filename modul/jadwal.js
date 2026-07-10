module.exports = (bot) => {
  bot.hears(/pindah|cabang|ruang|jadwal/i, (ctx) => {
    ctx.reply(
      "Kalau ada yang bingung soal jadwal atau lokasi ruangan, kasih tau mereka kalau jadwal paten kita itu Senin-Rabu-Jumat atau Selasa-Kamis-Sabtu. Untuk detail pembagian ruangan di Jatwin atau Dr. Angka (kayak ruang Inovasi, Prestasi, dll), pastikan kamu bilang kalau admin bakal selalu infokan H-1 les langsung ke grup WA kelompok belajar mereka masing-masing."
    );
  });
};