import CryptoJS from 'crypto-js';

export default {
    // md5加密
    md5: function (pwd) {
        return CryptoJS.MD5(pwd).toString();
    },
    // 双重md5加密
    dbmd5: function (pwd) {
        let f = CryptoJS.MD5(pwd).toString();
        return CryptoJS.MD5(f).toString();
    }
}