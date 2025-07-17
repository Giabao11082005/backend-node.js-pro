import mysql from "mysql2/promise";

const getConnection = async () => {
  const connection = await mysql.createConnection({
    port: 3306,
    host: "localhost",
    password: "11082005",
    user: "root",
    database: "backend_nodejs_pro",
  });
  //
  return connection;
};

export default getConnection;
