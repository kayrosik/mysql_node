module.exports = {
  "session": {
    "checkExpirationInterval": 5000,
    "expiration": 10000,
    "secret": "ciw7p02f70000ysjon7gztjn7"
  },
  "encryption": {
    "algorithm": "aes-256-cbc",
    "inputEncoding": "utf8",
    "outputEncoding": "hex",
    "ivlength": 16,
    "key": "ciw7p02f70000ysjon7gztjn7"
  },
  "hash": {
      "algorithm": "sha512",
      "keylen": 64,
      "iterations": 10000
  }
}
