const { Plugin } = require("powercord/entities");
const { getModule } = require("powercord/webpack");

const words = ["amogus", "amog"];
const sound = "https://cdn.discordapp.com/attachments/772787532559024148/1009827203304935536/amog.mp3";

module.exports = class Amogus extends Plugin {
	startPlugin() {
		getModule(["subscribe", "register"], false).subscribe("MESSAGE_CREATE", t => {
			for (const word of words) {
				if (t.message.content.toLowerCase().includes(word) && !t.sendMessageOptions) {
					new Audio(sound).play();
					return;
				}
			}
		});
	}
}