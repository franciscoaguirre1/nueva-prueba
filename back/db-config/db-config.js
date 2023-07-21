require('dotenv').config()

const dbConfig = {
    connectionLimit: 300,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    charset : 'utf8mb4'
};



module.exports = dbConfig;