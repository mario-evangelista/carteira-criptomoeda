const bip32 = require("bip32");
const bip39 = require("bip39");
const bitcoin = require("bitcoinjs-lib");
const crypto = require("crypto"); // Import the crypto module for entropy generation

const network = bitcoin.networks.testnet;
const path = `m/49'/1'/0'/0`;
const wordCount = 12;

// --- Mnemonic Generation with Entropy ---
let mnemonic;
do {
  const entropyBuffer = crypto.randomBytes((wordCount * 11) / 8); // Calculate buffer size
  const entropyHex = entropyBuffer.toString("hex"); // Convert to hex
  mnemonic = bip39.entropyToMnemonic(entropyHex);
} while (!bip39.validateMnemonic(mnemonic));

const seed = bip39.mnemonicToSeedSync(mnemonic);
// --- Rest of the code (same as before) ---
const root = bip32.fromSeed(seed, network);
const account = root.derivePath(path);

let addresses = [];
let privateKeys = [];

for (let i = 0; i < 5; i++) {
  let node = account.derive(0).derive(i);
  let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
  }).address;

  addresses.push(btcAddress);
  privateKeys.push(node.toWIF());
}

console.log("\n===== Carteira Bitcoin (Testnet) =====");
for (let i = 0; i < addresses.length; i++) {
  console.log(`\nEndereço ${i + 1}: ${addresses[i]}`);
  console.log(`Chave Privada ${i + 1}: ${privateKeys[i]}`);
}
console.log("\nSeed (GUARDAR EM LOCAL SEGURO!):", mnemonic);
console.log("===================================\n");
