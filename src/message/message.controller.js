import { messageModel } from "../../database/models/message.model.js";
import { userModel } from "../../database/models/user.model.js";

const addMessage = async (req, res) => {
  let { title, recivedId } = req.body;

  let user = await userModel.findById(recivedId);
  if (user) {
    let message = await messageModel.insertMany({ title, recivedId });
    res.json({ message: "message Added", message });
  } else {
    res.json({ message: "user Not Found" });
  }
};
const getAllUserMessages = async (req, res) => {
  let id = req.params.id;
  let isLogged = await userModel.findById(id);
  console.log(isLogged.isLoggedIn);
  if (isLogged.isLoggedIn === true) {
    let messages = await messageModel.find({ recivedId: id });
    res.json({ message: "Success", messages });
  } else {
    res.json({ message: "you should Login First" });
  }
};

const deleteMessage = async (req, res) => {
  let id = req.params.id;
  let message = await messageModel.findByIdAndDelete(id);
  if (message) {
    res.json({ message: "message Deleted", message });
  } else {
    res.json({ message: "message Not Found" });
  }
};
const updateMessage = async (req, res) => {
  let id = req.params.id;
  let title = req.body;
  let updatedMessage = await messageModel.findByIdAndUpdate(id, title, {
    new: true,
  });
  if (updatedMessage) {
    res.json({ message: "message Updated", updatedMessage });
  } else {
    res.json({ message: "message Not Found" });
  }
};
const searchMessage = async (req, res) => {
  let id = req.params.id;
  let message = await messageModel.findById(id);
  if (message) {
    res.json({ message: "Success", message });
  } else {
    res.json({ message: "message Not Found" });
  }
};

export {
  addMessage,
  deleteMessage,
  updateMessage,
  searchMessage,
  getAllUserMessages,
};
