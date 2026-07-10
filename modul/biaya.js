module.exports = (bot) => {
  bot.hears(/biaya|harga|spp|pricelist|bayar/i, (ctx) => {
    ctx.reply(
      "Untuk info biaya les bulanan (kelas ber-5):\n\nSMP:\n- Kelas 7: 300.000\n- Kelas 8: 330.000\n- Kelas 9: 350.000\n\nSMA:\n- Kelas 10: 370.000\n- Kelas 11: 390.000\n- Kelas 12: 420.000\n\nUTBK (Kelas 12 & Alumni):\n- 450.000\n\n*Catatan: Biaya pendaftaran awal 80.000 per anak. SPP dibayarkan di hari pertama les dan menjadi deadline untuk bulan berikutnya."
    );
  });
};