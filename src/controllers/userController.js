const { AppDataSource } = require("../models/data-source")

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
		if (!email) {
		  const error = new Error('KEY_ERROR');
			error.status = 400;
			throw error
		}
    await AppDataSource.query(`
			INSERT INTO users (name, email, password)
			VALUES ('${name}', '${email}', '${password}')
		`);
    res.status(201).json({
      message: "USER_CREATED",
    });
  } catch (error) {
    // console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  signUp,
};
