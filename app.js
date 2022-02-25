//  const { default: Web3 } = require("web3");
// const Web3 = require('Web3')
// const web3 = new Web3()

// const string = web3.utils.sha3( Math.random(0, 1000000).toString(16) + web3.utils.randomHex(32) )
// const wallet = web3.eth.accounts.create(string)
// const privateKeyEncrypted = web3.eth.accounts.encrypt(wallet.privateKey, '12345')
// const privateKey = web3.eth.accounts.decrypt(privateKeyEncrypted, '12345')
// web3.eth.accounts.wallet.add('0x0b7ebfae73a5ebfff79866ac5faebb62d45e38571cdada56d54cbbc3565446e9', string)
// console.log(privateKey)

const createWallet = require('./src/crear-wallet')
 function accion(){
     createWallet()
 }