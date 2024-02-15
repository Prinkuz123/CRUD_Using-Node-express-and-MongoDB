const User = require("../Model/userModel");

//----Adding USer-----
const createUser = async (req, res) => {
  const user = new User(req.body);
  const userData = await user.save();

  res.json({
    status: "success",
    message: "User saved successfully",
    data: userData,
  });
};

//----Updating User-----
const updateUser = async (req, res) => {
  const userid = req.params.id;
  const editedUser = req.body;
  const user = await User.findByIdAndUpdate(userid, editedUser, { new: true });

  if (user) {
    const userData = {
      name: user.name,
      email: user.email,
    };

    res.status(200).json({
      status: "success",
      message: "Data updated successfully",
      data: userData,
    });
  } else {
    res.status(400).json({
      message: "orduct not found",
      status: "failure",
    });
  }
};

//--------Deleting User----
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = User.findByIdAndDelete(userId);
  if (user) {
    res
      .status(200)
      .json({ status: "success", message: "user deleted successfully" });
  } else {
    res.status(400).json({ message: "internal error", status: "failure" });
  }
};
//--------Get all users-------
const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    message: "listed all users",
    data: users,
  });
};


//----get user by query----
const getUserByQuery = async (req, res) => {
  const userData = req.query;

  const user = await User.find({ ...userData });
  // const user = await User.find({age:userAge})
  console.log(user, "user from getby age");
  if (user.length > 0) {
    res.status(200).json({
      status: "sucess",
      message: "get user by age ", 
      data: user,
    });
  } else {
    res.status(400).json({
      status: "failure",
      message: "user not found",
    });
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
getUserByQuery
};
