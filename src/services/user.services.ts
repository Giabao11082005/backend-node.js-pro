import getConnection from "../config/database";

const getAllUser = async () => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute("SELECT * FROM users");
    return rows;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const handleCreateUser = async (
  fullName: string,
  email: string,
  address: string
) => {
  try {
    const connection = await getConnection();
    const sql =
      "INSERT INTO `users` (`name`,`email`, `address`) VALUES (?, ?, ?)";
    const values = [fullName, email, address];
    const [result] = await connection.execute(sql, values);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { getAllUser, handleCreateUser };
