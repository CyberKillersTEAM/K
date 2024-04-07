/**

Copyright (C) 2024.        

 * @project_name : LEO-MD    
 
 * @authors : CyberKillersTEAM <https://github.com/CyberKillersTEAM>   
 
 * @description : LEO-MD is simple bot by CyberKillersTEAM.     
   
 * @version 1.0.0   
 
 **/
 
const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '```Testing Ping```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '*Pɪɴɢ : ' + (final - inital) + ' Mꜱ* ', edit: key});
    }
);
