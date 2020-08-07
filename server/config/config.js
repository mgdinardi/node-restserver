



// ==============================
// Puerto
/// ==============================
process.env.PORT = process.env.PORT || 3000;
// ==============================
// Entorno
/// =============================
process.env.NODE_ENV = process.env.NODE_ENV || "dev";
// ==============================

// Vemcimiento del token
/// =============================
process.env.CADUCIDAD_TOKEN = '48h';
// ==============================

// SEED de autenticacion
/// =============================
process.env.SEED = process.env.SEED || 'secret';
// ==============================

// Google Client ID
/// =============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '243997012432-h8bs7nqr14v8326q4pcbi4u4584h0n4q.apps.googleusercontent.com';
// ==============================


// Base de datos
/// =============================
let urlDB;

if( process.env.NODE_ENV === 'dev' ){
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;
