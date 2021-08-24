// const userModel = require('../../database/models/users')
const userController = require("../../database/controllers/users");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`Novo usuário conectado ${socket.id}`);
    socket.on("login", async (data) => {
      const user = await userController.findUser(data);
      socket.emit("login", user)
    });
  });
};
