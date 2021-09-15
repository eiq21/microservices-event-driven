const db = require("../models");
const User = db.User;
class UserController {
  async create(req, res) {
    console.log(req.body);
    const { name, email, password } = req.body;
    const conditions = { email };

    const userExists = await User.findOne(conditions).exec();

    if (userExists) {
      return res.json({ message: "User already exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    newUser.save();
    return res.json(newUser);
  }
}

module.exports = UserController;
