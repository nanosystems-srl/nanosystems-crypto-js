import CryptoJS from 'crypto-js';

export class NsCrypto {

    // Private properties
    private readonly _key: string;
    private readonly _iv: CryptoJS.lib.WordArray; // According to: https://stackoverflow.com/a/75473014/3164070 iv is ignored, so can be anything!

    // Private methods
    private _validateKey(key: string) {
        if (typeof key !== 'string' || key === '') {
            throw new Error('Key must be a non-empty string');
        }
    }

    private _validateIv(iv: string) {
        if (typeof iv !== 'string' || iv === '') {
            throw new Error('Key must be a non-empty string');
        }
    }

    // Public API
    constructor(key: string, iv: string) {
        this._validateKey(key);
        this._validateIv(iv);

        this._key = key;
        this._iv = CryptoJS.enc.Hex.parse(iv);
    }

    encryptAES256(text): string {
        const encrypted = CryptoJS.AES.encrypt(text, this._key, { iv: this._iv });
        return encrypted.toString();
    }

    decryptAES256(text): string {
        const encrypted = CryptoJS.AES.decrypt(text, this._key, { iv: this._iv });
        return encrypted.toString(CryptoJS.enc.Utf8);
    }
};