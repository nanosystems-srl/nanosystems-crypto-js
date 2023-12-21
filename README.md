
# Nanosystems Crypto

Nanosystems javascript library for cryptography

### Installation

```
npm i git+https://github.com/nanosystems-srl/nanosystems-crypto-js.git
```

### Usage
Create a new instance of the class NsCrypto

```
const nsCrypto = new NsCrypto("my_key", "my_iv");
```

##### Encryption

```
const encryptedText = nsCrypto.encryptAES256("text");
```

##### Decryption

```
const decryptedText = nsCrypto.decryptAES256("encrypted_text");
```