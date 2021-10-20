const HDWallerProvider = requite('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const mnemonic = '';
const rinkeby = '';

const provider = new HDWallerProvider(
    mnemonic,
    rinkeby
);
const web3 = new Web3(provider);
