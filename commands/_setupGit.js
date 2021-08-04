/*CMD
  command: /setupGit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


url = Libs.Webhooks.getUrlFor(
   { command: "onGitPush", user_id: user.id }
)

Bot.sendMessage(url);
