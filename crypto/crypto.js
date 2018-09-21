'use strict';
// crypto模块的目的是为了提供通用的加密和哈希算法。

const crypto = require('crypto');

// MD5和SHA1
// MD5是一种常用的哈希算法，用于给任意数据一个“签名”。这个签名通常用一个十六进制的字符串表示：
const hash = crypto.createHash('md5');
// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));//7e1977739c748beac0c0fd14fd26a544 如果要计算SHA1，只需要把'md5'改成'sha1'

// Hmac算法也是一种哈希算法，它可以利用MD5或SHA1等哈希算法。不同的是，Hmac还需要一个密钥：
const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex'));//80f7e22570......