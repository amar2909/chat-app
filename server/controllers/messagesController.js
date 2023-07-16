const messageModel = require("../model/messageModel");

exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await messageModel.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });
    if (data) return res.json({ msg: "Message added success" });
    return res.json({ msg: "Failed to add" });
  } catch (ex) {
    next(ex);
  }
};
exports.getAllMessage = async (req, res, next) => {};
