require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index rice saddle aspect hockey enter fog super'; 
let testAccounts = [
"0x70f27312710111a181ec8673b3b24771a01fa9ba3975146c9ff75224d69b32ec",
"0xba794c2a2789f59cd9a49eec1c4540b935c74501abd5910f3e06d7f2f744d7b4",
"0x82d6e0acdc245c4e14275fdfdaddbc0370ff4fe4ae781695cee6aaf79e9ebc3c",
"0x7b32a98f5e623a825b0129ccc0d54062b6dc4390108be32989782c7731abc0a5",
"0x5d9312b7bfd084d9470c2e5dc8e15b112c0779feed917bb4253724aa20b027da",
"0x877d9fb0ac6457a8678780513ced90c58a122def3b0729ae2cb72e2716cae828",
"0x0f494eb233919ce598a9cf5f27e36aae276fa9cad7dfe6089ba19c5af0fe098d",
"0xc7f003a42e37e96bd1ed048c42d1473bc0c2fa5475d68e588b9ba9ed4e0a8f7c",
"0x1c4010ad5c1477fa421f5220d8f6e2a5717c2d0b96ee3af9cade4b3a00cb2f5b",
"0x6afe6c58e37d2f5191bce8f317b5fde0df40f07eb077c3c1ef49d54643568433"
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

