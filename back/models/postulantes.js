const mysql = require("../utils/mysql-pool.js")



exports.leerPostulantes = async (req, res) => {
    const conn = await mysql.connection()
    try {
        const postulantes = await conn.query(`CALL SP_OBTENER_DATOS()`)
        const data = {
            data: postulantes[0],
            sqlMsg: 'OK',
            resMsg: 'OK'
        }
            console.log(data.postulantes);
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