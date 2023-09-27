import CryptoJS from 'crypto-js';
var NsCrypto = /** @class */ (function () {
    // Public API
    function NsCrypto(key, iv) {
        this._validateKey(key);
        this._validateIv(iv);
        this._key = key;
        this._iv = CryptoJS.enc.Hex.parse(iv);
    }
    // Private methods
    NsCrypto.prototype._validateKey = function (key) {
        if (typeof key !== 'string' || key === '') {
            throw new Error('Key must be a non-empty string');
        }
    };
    NsCrypto.prototype._validateIv = function (iv) {
        if (typeof iv !== 'string' || iv === '') {
            throw new Error('Key must be a non-empty string');
        }
    };
    NsCrypto.prototype.encryptAES256 = function (text) {
        var encrypted = CryptoJS.AES.encrypt(text, this._key, { iv: this._iv });
        return encrypted.toString();
    };
    NsCrypto.prototype.decryptAES256 = function (text) {
        var encrypted = CryptoJS.AES.decrypt(text, this._key, { iv: this._iv });
        return encrypted.toString(CryptoJS.enc.Utf8);
    };
    return NsCrypto;
}());
export { NsCrypto };
;
