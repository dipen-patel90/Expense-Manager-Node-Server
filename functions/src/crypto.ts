import crypto = require("crypto");
const algorithm = "aes-256-cbc"; // Using AES encryption
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const separator = "RESOURCE_MANAGEMENT_WEB";

function encrypt(text: string) {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return (
    iv.toString("hex") +
    separator +
    key.toString("hex") +
    separator +
    encrypted.toString("hex")
  );
}

// Decrypting text
function decrypt(text: string) {
  const ivData = text.split(separator);
  const iv = Buffer.from(ivData[0], "hex");
  const key = Buffer.from(ivData[1], "hex");
  const encryptedText = Buffer.from(ivData[2], "hex");
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

export { encrypt, decrypt };
