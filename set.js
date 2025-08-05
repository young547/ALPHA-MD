

/*Why does my code work? I don’t know. Why does my code break? I also don’t know.*/
/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VUW3OySBT8L/Oq+SJXL1WpWkBBIygIori1DyMMF7k6DCik/O9baLLJw37ZLE9Tw6FPc7r7vIEsj0q0RA2YvIECRzUkqDuSpkBgAsTK9xEGfeBBAsEEpKJWlNYgYuQMbQXE50fdIVXceq8WVTe0vO69jpik8Xh59AJufVBUxyRyvwFMnsdHptqOeqZ5cfTV5kqxzulA+WTtG9tK5g8b27BHy57bGi/g1iHCCEdZMCtClCIMkyVqdBjhn9EvVyd3jQpxcGTnympfhMFCWCrt9VD6rWCuB9jdXsfyIWEz4Wf0Vy1vbPThYakGNG8VUFPOrlKfZuW5mE1tNjnN5dB6JjNeXjzol1GQIW/hoYxEpPnx3Afrg5N6zJG8Dg8bKMbSfNf6gpopirldh/bel67ZfLo7uLvgZ8TjWDsLU+ZccFFcu+No5bgl6zPI9qrrgWJzHbe+PKKDpR1/Ja7jD6/E/2furAQNYXoVm+2ZtYQhb4qZfxKTSmnUIa8Wz/hU4N7pvAt/aptpAOeNet6w4/0itFKbc3oNLa9WV8mo9fNOdpx1tkp23CG5fNKHpMLfsURtCfdIugYMSZW5bXOrpRU223J9NMfF+XnzWmgwKWarZ74V1+Q89zVWnW48xT4ZxsEat8NYp+byTgsMoaaiJdVs6utJeLn/UYyahQcm1K0PMAqikmBIojzr7rhxH0CvNpGLEblPF5iR4yFK5fYXNjztnFO814Nxb72xnyVHVxti0dvZhm4SN9BeQB8UOHdRWSJvHpUkx42GyhIGqASTP//qgwxdyUO3rhtD9YEf4ZJss6pIcuh9iPrxErpuXmXEbDJX6g4Ig8ng8xoREmVB2Y2xyiB2w6hGUghJCSY+TEp06wMP1ZGLOjwgmq+jRaJha9PQT7qmQ0NLjaCjHObZo4TnWWZMe8cnFrLME+v78OmIGO6JHcCxC9nBmGZc0AfRe2S6b36roHxJzOest8Ah5cyWrzYjEx+JZEbj8q7CY/QIIw9MCK5QHxyhG1eFlcco+wa3mqVwrxeysNhxuHdgB4Wa8nZw8qHxBfchKZi8fa4pKfc6vNHBWtq7vQn6IL07MOr+nObYITWgOG7IcxOG+6P8dekGCYviV4YI6IPkXjbmaIrjGYYZcEOa7wq7+9s/knR4HiIwSkowAZJWrQs1V2aqGl9HhqIIRiBIgQA+JfyIwsNrTqKvuNat0xKOzmP+qF3GYXqxU3N+zBnNMinV2WvRcYuyy8u/gIAJ0Cl7lfWYUcKf5swFu+nZDTVtfaKVkkdOfY3mWlhZa1uRIL+us1SHikBR5SiUaliqWqyNvDraWELPvIo9mRf3jZ0Il5eu28NKX5uRJNlFMSxE3Yld8yBrr6LK27nBLSnJEGqSVKtQEWIc4vy5zkWvlfyjEHjcdqpOWRMztS2dj+E8RUezZ/nFrBe0w8h4hPS+JJL35Rzd8/P2bjw/Qvddl8FOwP+W7jMDg1v/C8b79vyNz8Tdq9Uil1E5rNTLGqWtpjuHUj7EIc2v2tmAmLTcLlJqXozA7fZXHxQJJH6OUzABMPNwHnmgD3BedSFdZH7+TTNJ2C6k9/WUwJIIn8G3ohSVBKYFmFBDjmXGHD2gHlU6zos5LMNO913MiZ2lG6EoTALJxxoBQvdM/RTc/gY/8rZYYQgAAA==', //paste your session here 
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Eliakim", //replace with your owner name
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254710155765",   //replace with your owner number  
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',    
    URL: process.env.URL || "https://files.catbox.moe/4h8lfw.jpg",    //replace with your image url                     
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://github.com/Keithkeizzah", // replace with your url
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'ELIAKIM-MD', //replace with your bot name
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", //replace with your timezone 
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'yes',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;

//Why do we call it "open source" when it feels more like "open wounds"?🗿🗿

//Because sharing is caring... and crying is healing🗿🗿

