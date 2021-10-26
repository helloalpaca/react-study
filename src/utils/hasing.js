import crypto from 'crypto';

export default function hashing(
  chars,
  convert_base64 = true,
  hashing_algho = 'sha256'
) {
  return new Promise(async function (resolve, reject) {
    let value = crypto.createHash(hashing_algho).update(chars, 'utf8');
    if (convert_base64) {
      value = value.digest('base64');
      if (value.slice(-1) === '=') {
        value = value.slice(0, -1);
        if (value.slice(-1) === '=') {
          value = value.slice(0, -1);
        }
      }
    } else {
      value = value.digest('hex');
    }
    resolve(value);
  });
}
