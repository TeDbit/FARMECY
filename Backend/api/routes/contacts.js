const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Contact = require("../models/contacts.js");

router.get("/", (req, res, next) => {
  Contact.find()
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json({
        documents: doc,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/", (req, res, next) => {
  const contact = new Contact({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    number: req.body.number,
  });
  contact
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Handling POST requests to /contatcts",
        contact: contact,
      });
    })
    .catch((err) => console.log(err));
});

router.get("/:contactId", (req, res, next) => {
  const id = req.params.contactId;
  Contact.findById(id)
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete("/", (req, res, next) => {
  const id = req.body.toDelete;
  Contact.deleteMany({ _id: { $in: id } })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.patch("/:contactId", async (req, res, next) => {
  const id = await req.params.contactId;
  const updateContacts = Contact.findOneAndUpdate(
    { _id: id },
    {
      name: req.body.editedName,
      number: req.body.editedNum,
    },
    { returnNewDocument: true }
  )
    .exec()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
