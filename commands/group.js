/**
            var role = "☇ Child of Speed";
        } else if (lvpoints <= 30) {
            var role = "☇ Dominator Speed";
        } else if (lvpoints <= 32) {
            var role = "☇ God of Speed ";
        } else if (lvpoints <= 34) {
            var role = "🌬 Child Of Light";
        } else if (lvpoints <= 36) {
            var role = "🌬 Light";
        } else if (lvpoints <= 38) {
            var role = "🌬 Master Of Light";
        } else if (lvpoints <= 40) {
            var role = "🌙 Legend X";
        } else if (lvpoints <= 42) {
            var role = "🎇 Angel";
        } else if (lvpoints <= 44) {
            var role = "🎇 Fallen Angel X";
        } else if (lvpoints <= 46) {
            var role = "🎭 Nearly Devil";
        } else if (lvpoints <= 55) {
            var role = "🔥Immortal Devil X";
        } else {
            var role = "Kiddo";
        }
        if (Config.levelupmessage !== 'false') {
            await Void.sendMessage(citel.chat, {
                image: {
                    url: await botpic(),
                },
                caption: `
╔
║ *Wᴏᴡ, ꜱᴏᴍᴇᴏɴᴇ ᴊᴜꜱᴛ*
║ *Lᴇᴠᴇʟ ᴜᴘ Hᴜʜ🔥*
║ *👤 Name:* ${citel.pushName}
║ *⚡ Level :* ${sck1.level}🌀
║ *💫 Exp :* ${sck1.xp} / ${Levels.xpFor(sck1.level + 1)}
║ *📍 Role :* *${role}*
║ *Enjoy 🥳*
╚
`,
            }, {
                quoted: citel,
            });
        }
    }

})
}
 
