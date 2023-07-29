const { Client, MessageEmbed } = require('discord.js');
const client = new Client();


require('dotenv').config();
const config = {
  token: process.env.TOKEN
};
var mineflayer = require('mineflayer')


let ip = "anarchyvn.net"

let username = ""

let ver = "1.12.2" 

const fs = require('fs');

function genRandomInt (min, max) {
  return Math.floor(Math.random()*max) + min
}
function createBot () {
  var a = genRandomInt(1, 9)
  var b = genRandomInt(1, 9)
  var c = genRandomInt(1, 9)
  var d = genRandomInt(1, 9)

  var bot = mineflayer.createBot({
    host: ip ,
    username: username,
    version: ver
  })

  bot.on('windowOpen', (window)=> {
    window.requiresConfirmation = false;

    bot.clickWindow(a, 0, 0)
    bot.clickWindow(b, 0, 0)
    bot.clickWindow(c, 0, 0)
    bot.clickWindow(d, 0, 0);

    setTimeout(() => {bot.chat('/anarchyvn')}, 15 * 1000)
    setTimeout(() => { bot.clickWindow(10, 0, 0) }, 20 * 1000)
  }) 
  process.setMaxListeners(0);

  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)



  bot.on('login', async () => {
    let channel = client.channels.cache.get(`1134519612969590906`)
    console.log(`nice ${username}`);
    bot.once('spawn', () => { 
        channel.send(`EZ PIN ${a} ${b} ${c} ${d} (ingame: ${username})`)
      })
    })
  bot.on('message', message => {
      let channel = client.channels.cache.get(`1134519612969590906`)
      if (!channel) return;
      const cn = new MessageEmbed()
          .setDescription(`${message}`)
      channel.send(cn)

  })
  bot.on('kicked', function() {
    let channel = client.channels.cache.get(`1134519612969590906`)
      if (!channel) return;
      const cn3 = new MessageEmbed()
              .setColor('F90000')
              .setDescription(`Bot đã bị disconnect khỏi ${ip}`)
          channel.send(cn3);
      setTimeout(createBot, 180000)
    })      

createBot()


client.login(config.token);
