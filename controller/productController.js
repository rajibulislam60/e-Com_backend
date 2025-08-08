const createProductsController = async (req, res) => {
  try {
    res.send("products controller is working.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createProductsController };
