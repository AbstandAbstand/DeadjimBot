/*CMD
  command: /init
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// set secret PIN
Libs.BlockIO.setSecretPin("LMceNCSjWxMzrkA5BCpXaxp3GMw5WLt9TCEXhCTzWvyj");

Libs.BlockIO.Bitcoin.setApiKey("66ed-d526-7021-118b");
Libs.BlockIO.Dogecoin.setApiKey("2c3f-c480-ea77-18ec");
Libs.BlockIO.Litecoin.setApiKey("0b93-ac9c-96bb-1795");

// Testnet
Libs.BlockIO.testNet.Bitcoin.setApiKey("4679-3129-2b12-8730");
Libs.BlockIO.testNet.Dogecoin.setApiKey("664f-1007-0729-2377");
Libs.BlockIO.testNet.Litecoin.setApiKey("a96d-78c7-3d8a-042d");
