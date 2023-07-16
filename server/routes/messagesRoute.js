// const { addMessage, getAllMessage } = require("../model/messageModel");

// const {
//   addMessage,
//   getAllMessage,
// } = require("../controllers/messagesController");

// const router = require("express").Router();

// router.post("/addmsg", addMessage);
// router.post("/getmsg", getAllMessage);

// module.exports = router;
const messageModel = require("../model/messageModel");

const {
  addMessage,
  getAllMessage,
} = require("../controllers/messagesController");

const router = require("express").Router();

router.post("/addmsg", addMessage);
router.post("/getmsg", getAllMessage);

module.exports = router;
