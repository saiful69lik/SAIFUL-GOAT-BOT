const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "info",
		aliases: ["admin"],
		author: "ULLASH ",
		role: 0,
		shortDescription: "info and my owner the cmd",
		longDescription: "",
		category: "INFO",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const SAIFULInfo = {
				name: '𝐬 𝐚 𝐢 𝐟 𝐮 𝐥 ッ',
				gender: '𝐌𝐚𝐥𝐞',
				age: '26',
				Tiktok: 'saifulislamm013',
				Relationship: 'বউ নাই আমি বিদেশ',
				religion: '𝐈𝐬𝐥𝐚𝐦',
				facebook: 'https://www.facebook.com/profile.php?id=100011152309303'
			};

			const SAIFUL = 'https://files.catbox.moe/ega4vt.jpg';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const imgResponse = await axios.get(ULLASH, { responseType: 'arraybuffer' });
			const imgPath = path.join(tmpFolderPath, 'owner_img.jpeg');

			fs.writeFileSync(imgPath, Buffer.from(imgResponse.data, 'binary'));

			const response = `╭─────❁\n│  𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢  \n│
│𝐍𝐚𝐦𝐞: ${SAIFULInfo.name}
│𝐆𝐞𝐧𝐝𝐞𝐫 : ${SAIFULInfo.gender}
│𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 :${SAIFULInfo.Relationship}
│𝐀𝐠𝐞 :${SAIFULInfo.age}
│𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧: ${SAIFULInfo.religion}
│𝐓𝐢𝐤𝐭𝐨𝐤 : ${SAIFULInfo.Tiktok}
│𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: ${SAIFULInfo.facebook}\n╰────────────❁`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(imgPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(imgPath);

			api.setMessageReaction('🐔', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in SAIFULinfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};
