import { userModel } from "../../database/models/user.model.js";
import bcrypt from "bcrypt";


const signUp = async (req, res) => {
  let { userName, email, age, password } = req.body;
  let exist = await userModel.findOne({ email });
  if (exist) {
    res.json({ message: "Email Already Exist" });
  } else {
    const hash = bcrypt.hashSync(password, 8);
    let user = await userModel.insertMany({
      userName,
      email,
      age,
      password: hash,
    });
    res.json({ message: "Success", user });
  }
};

const signIn = async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (user) {
    const match = bcrypt.compare(password, user.password);
    if (match) {
      await userModel.updateOne({ _id: user.id }, { isLoggedIn: true });
      res.json({ message: "LoggedIn" });
    } else {
      res.json({ message: "invalid password" });
    }
  } else {
    res.json({ message: "invalid email" });
  }
};

const getUsers = async (req, res) => {
  let users = await userModel.find();
  res.json({ message: "Success", users });
};

const updateUser = async (req, res) => {
  let id = req.params.id;
  let { userName, email } = req.body;
  let user = await userModel.findByIdAndUpdate(
    id,
    { userName, email },
    { new: true }
  );
  if (user) {
    res.json({ message: "user Updated", user });
  } else {
    res.json({ message: "user Not Found" });
  }
};
const deleteUser = async (req, res) => {
  let id = req.params.id;
  let user = await userModel.findByIdAndDelete(id);
  {
    if (user) {
      res.json({ message: "user Deleted", user });
    } else {
      res.json({ message: "user Not Found" });
    }
  }
};
const getUserSorted = async (req, res) => {
  let users = await userModel.find().sort({ userName: 1 });
  res.json({ message: "Success", users });
};
const searchUser = async (req, res) => {
  let id = req.params.id;
  let user = await userModel.findById(id);
  if (user) {
    res.json({ message: "Success", user });
  } else {
    res.json({ message: "User Not Found" });
  }
};
const logout = async (req, res) => {
  console.log("tmam");
  let id = req.params.id;

  await userModel.findOneAndUpdate({ _id: id }, { isLoggedIn: false });
  res.json({ message: "Logged Out" });
};
export {
  signUp,
  signIn,
  getUsers,
  updateUser,
  deleteUser,
  getUserSorted,
  searchUser,
  logout,
};
