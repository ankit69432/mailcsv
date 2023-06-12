const users = require("../models/users");
const csv = require("csv-writer");
const path = require("path");
const nodeMailer = require("nodemailer");

const mailTest = () => {
  const test = nodeMailer
    .createTestAccount()
    .then((test) => {
      const transport = nodeMailer.createTransport({
        // host: test.smtp.host,
        // port: test.smtp.port,
        // secure: false,
        service: "gmail",
        auth: {
          user: "ankitmishra.geitpl@gmail.com",
          pass: "otnsxcvxfcjqvjof",
        },
      });
      transport
        .sendMail({
          from: "ankitmishra.geitpl@gmail.com",
          to: "ankit.itwankalan@gmail.com,mishraankit69432@gmail.com",
          subject: "testing",
          text: "Working fine",
          attachments: { path: path.join("new.csv") },
        })
        .then((succ) => {
          console.log(succ);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

const createUser = (req, res) => {
  console.log(req.body);

  users
    .create(req.body)
    .then((result) => {
      res.status(201).json({
        msg: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const mail = (req, res) => {
  users
    .findAll()
    .then((result) => {
      const writer = csv.createObjectCsvWriter({
        path: "new.csv",
        header: [
          { id: "id", title: "Id" },
          { id: "name", title: "Name" },
          { id: "phone", title: "phone" },
        ],
      });
      writer
        .writeRecords(result)
        .then((success) => {
          console.log(success);
          mailTest();
          return res.status(200).json({
            msg: "file created",
          });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({
            err: err,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err: err,
      });
    });
};
module.exports = { createUser: createUser, mail: mail };
