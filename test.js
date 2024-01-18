const Wallet = require('ethereumjs-wallet'),
      fs = require('fs');


const utcFile = "./keystore.txt"
const password = ""


const myWallet = Wallet.fromV3(fs.readFileSync(utcFile).toString(), password, true);

console.log("Private Key: " + myWallet.getPrivateKey().toString('hex')) 
console.log("Address: " + myWallet.getAddress().toString('hex')) 