let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL [081938835391]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [081938835391]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
