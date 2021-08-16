/*CMD
  command: /profile
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 👤 get user profile photos
CMD*/

Api.getUserProfilePhotos({user_id: user.telegramid, on_result: "onGetProfilePhotos"});
