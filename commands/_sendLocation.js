/*CMD
  command: /sendLocation
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please share your location via 📎
  keyboard: 
  aliases: 🗺 send location
CMD*/

// you can inspect all data
// Bot.inspect(request);

let location = request.location
if(!location){ Bot.sendMessage("Please send location"); return }

Bot.sendMessage("Your location is:\n longitude " + location.longitude + "\n latitude: " + location.latitude )
