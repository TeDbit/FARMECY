const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Message = require("../models/messages");

router.get("/", (req, res, next) => {
  Message.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json({ docs });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/", (req, res, next) => {
  const message = new Message({
    _id: new mongoose.Types.ObjectId(),
    subject: req.body.subject,
    messageBody: req.body.messageBody,
    receivers: req.body.receivers,
  });
  message
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Handling POST requests to /messages",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:messageId", (req, res, next) => {
  const id = req.params.messageId;
  Message.findById(id)
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ messsage: "Not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete("/", (req, res, next) => {
  const id = req.body.toDelete;
  Message.deleteMany({ _id:{ $in : id}})
    .exec()
    .then((result) => {
      res.status(200).json(result)
   
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// router.patch("/:messageId", (req, res, next) => {
//   const id = req.params.messageId;
// });

module.exports = router;
