require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender silver now riot stereo pulse harvest canoe army giggle'; 
let testAccounts = [
"0x9b58a489f870a9a1ea1179038123988b7f0f6188dfbaef07f9528e3213e6f21c",
"0x9c2824468e616d9468037d71e85723ff1bf5c26f31b7761716dc224ba791774f",
"0xbd6b65784984c5f13408a73261798a93d90c605f70ac196171e044ad7b8859d3",
"0x0c9492fcacd3a4f7a4d6afc72d3a07d5dcea42367bf50cd0ccb0290012dfae69",
"0xf53617308ef1b0b1f7c9eadb0b44c87d2da31d0cf7304457687d70d1f25c4eeb",
"0x84584bdead53df8c47f7be6e731d04f8737475be81b26134e4421fd2cfc6360d",
"0x0ecb96766190b187c05600723b1d38204738900ad72bca75b31b22ed1d891e5d",
"0x4884ef7c22bb61fa185af80c0800b3dcfd558ba32fd28fd051403db0c19df90c",
"0x95a9ca2ecd015e1c4cc233ff8235dc304a09c59d334ee4e0e3bed64e0c4cbdee",
"0xd4be4b604b341772a9a19a41d19750dd3fb3b4e7c2c4a96ab2e36c577983802f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

