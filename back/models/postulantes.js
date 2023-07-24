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
    let connection;
    try {
        connection = await oracledb.getConnection(orcaleDbConfig);
        options = {
            //  outFormat: oracledb.OUT_FORMAT_OBJECT  // uncomment if you want object output instead of array
            };
        sql = 'BEGIN MASVIDADIGNA.PR_OBTENER_MUTUO_PERSONA(:O_CUR, :P_CUIL); END;';
    
        const result_data = {
            O_CUR: '',
            P_CUIL: '' 
        };
        const data = { O_CUR: {dir: oracledb.BIND_OUT, type: oracledb.CURSOR}, P_CUIL: 27288510119};
        const binds  = Object.assign({}, result_data, data);   
    
        const result = await connection.execute(sql, binds, options);
        console.log(result);
        const datares = {
            data: result,
            sqlMsg: '',
            resMsg: ''
        }
            res.status(200).send(result.datares)
    } catch (error) {
        console.log(error);
        const data = {
            data: [],
            sqlMsg: error,
            resMsg: error
        }
        res.status(500).send(data)
    } finally{
        if (connection) {
            connection.close()
        }

    }
}

