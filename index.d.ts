declare module "@nanosystems/crypto" {
    export class NsCrypto {
        private readonly _key;
        private readonly _iv;
        private _validateKey;
        private _validateIv;
        constructor(key: string, iv: string);
        encryptAES256(text: any): string;
        decryptAES256(text: any): string;
    }
}
//# sourceMappingURL=index.d.ts.map