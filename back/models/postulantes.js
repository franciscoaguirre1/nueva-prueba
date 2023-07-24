const mysql = require("../utils/mysql-pool.js")
const oracledb = require('oracledb');
const orcaleDbConfig = require("../db-config/oracle-config")


exports.leerPostulantes = async (req, res) => {
    const conn = await mysql.connection()
    try {
        const postulantes = await conn.query(`CALL SP_OBTENER_DATOS()`)
        const data = {
            data: postulantes[0],
            sqlMsg: 'OK',
            resMsg: 'OK'
        }   
            res.status(200).send(data)
    } catch (error) {
        const data = {
            data: [],
            sqlMsg: error,
            resMsg: error
        }
        res.status(500).send(data)
    } finally{
        conn.release()
    }
}

exports.leerDatosOracle = async (req, res) => {
    const mconnection = await oracledb.getConnection(orcaleDbConfig);
    try {
        const postulantes = await conn.query(`CALL PR_OBTENER_MUTUO_PERSONA(cuil)`)
        const data = {
            data: postulantes[0],
            sqlMsg: 'OK',
            resMsg: 'OK'
        }   
            res.status(200).send(data)
    } catch (error) {
        const data = {
            data: [],
            sqlMsg: error,
            resMsg: error
        }
        res.status(500).send(data)
    } finally{
        conn.release()
    }
}

