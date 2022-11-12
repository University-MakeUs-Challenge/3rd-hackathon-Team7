require("dotenv").config();
//import mysql from "mysql2/promise"

module.exports = {
    host: `${process.env.DB_HOST}`,
    user:`${process.env.DB_USER}`,
    port: `3306`,
    password: `${process.env.DB_PASSPASSWORD}`,
    database: `${process.env.DB_NAME}`
};