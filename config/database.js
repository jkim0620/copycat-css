// const pgp = require("pg-promise")({});
//
// let config;
//
// if (process.env.NODE_ENV === "test") {
//     config = {
//         host: "localhost",
//         port: 5432,
//         user: "arsood"
//     }
// } else {
//     config = {
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         user: process.env.DB_USER
//     }
// }
//
// let db;
//
// if (process.env.NODE_ENV === "production") {
//     db = pgp(process.env.DATABASE_URL);
// } else {
//     db = pgp(config);
// }
//
// module.exports = db;
