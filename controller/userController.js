const getUserController = async (req, res) => {
  res.status(200).send("UserData");
};

module.exports = { getUserController };
