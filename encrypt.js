const CryptoJS = require("crypto-js");

// Clave secreta (debe ser segura y no subirla a GitHub)
const SECRET_KEY = "mi-clave-secreta"; // Cámbiala por algo más seguro

// Credenciales que quieres cifrar
const email = "";
const password = "";

// Cifrar
const encryptedEmail = CryptoJS.AES.encrypt(email, SECRET_KEY).toString();
const encryptedPassword = CryptoJS.AES.encrypt(password, SECRET_KEY).toString();

console.log("Correo cifrado:", encryptedEmail);
console.log("Contraseña cifrada:", encryptedPassword);
