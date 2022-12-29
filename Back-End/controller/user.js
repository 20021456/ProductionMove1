const User = require("../models/user");
const bcrypt = require("bcrypt");
const HttpException = require("../utils/HttpException");
const jwtHelper = require("../helper/jwtHelper");

module.exports.register = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  console.log(username, password);
  const hash_password = await bcrypt.hash(password, 8);

  const user = new User({ username: username, password: hash_password });

  await user.save();
  res.status(200).send(user);
};

module.exports.login = async (req, res) => {
  var { username, password } = req.body;

  const user = await User.findOne({ username: username });

  if (!user) {
    throw new HttpException(401, "User not exist!");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new HttpException(401, "Incorrect password!");
  }

  // user matched!
  const accessToken = jwtHelper.genToken(user);
  const refreshToken = jwtHelper.genRefreshToken(user);
  if (process.env.USE_REDIS == true) {
    await global.redisClient.rPush(user.id, refreshToken);
  }
  res.cookie("refreshToken", refreshToken, {
    httpOnly: false,
    secure: false,
    path: "/",
    sameSite: "strict",
  });

  var info = user._doc;
  var { password, ...userWithoutPassword } = info;

  res.send({ ...userWithoutPassword, accessToken });
};
