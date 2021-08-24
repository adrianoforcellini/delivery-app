const { users } = require("../../../models");

const findUser = async (data) => {
  const { password, email } = data;
  const user = await users.findOne({
    where: { email, password },
  });
  return user;
};

const getAll = async () => {
  const users = await users.findAll();
  return users;
};

module.exports = {
  findUser,
  getAll,
};
