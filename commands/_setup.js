/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Keys setupped
  keyboard: 
  aliases: 
CMD*/


Bot.sendMessage("Setup...")
//return  // remove this line

// Get your keys in https://www.coinpayments.net/index.php?cmd=acct_api_keys
Libs.CoinPayments.setPrivateKey('D6c5bc05624599e4114441Ef03e785af6719667FB85e374D83Af38aeFaFaC6d3');
Libs.CoinPayments.setPublicKey('720eb8f8d632ea4bc584e3327392789178da88482a0e17e6a8be77bb072890fd');

// Get your BB Api Key from Bots.Business App in Profile
Libs.CoinPayments.setBBApiKey('piQfdh-QYmn_qiapebPfzoLuRN6rMkE8BVrQgcyi');

BBAdmin.installBot(
  { email: 'jimmideadjim@gmail.com',
    // see bot id in the app -> Bots -> Bot
    bot_id: 387463,
    // bot can be installed as protected
    // as_protected: true,
    // you can pass properties to bot:
    // bot_properties: [
    //     { name: 'test',
    //       value:'hello world',
    //       type:'string' }
    // ]
  }
)