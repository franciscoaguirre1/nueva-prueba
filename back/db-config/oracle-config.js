// const dbConfigOracle = {
//     user: 'USR_MASVIDADIGNA',
//     password: 'm4$VidA_DigN4',
//     connectString: "Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP) (HOST=d250aixde07.gobiernocba.gov.ar)(PORT=1521)))(CONNECT_DATA=(SERVER=DEDICATED)  (SERVICE_NAME=cba1d)));User id=USR_MASVIDADIGNA;Password=m4$VidA_DigN4;",
//   };


const dbConfigOracle = {
    user : 'USR_MASVIDADIGNA',
    password : 'm4$VidA_DigN4',
    connectString : '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=d250aixde07.gobiernocba.gov.ar)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=cba1d)));user=USR_MASVIDADIGNA;password=m4$VidA_DigN4;' ,

}

module.exports = dbConfigOracle;