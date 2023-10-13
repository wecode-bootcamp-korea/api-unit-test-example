const { AppDataSource } = require("../models/data-source")

// API Layered pattern이 적용되어 있지 않습니다. 
// 실습에 주의해 주세요!
const getAllPosts = async (req, res) => {
  try {
    const postData = await AppDataSource.query(`
			SELECT id, title, content, user_id FROM posts;
		`);
    res.status(200).json({ postData });
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  getAllPosts,
};
