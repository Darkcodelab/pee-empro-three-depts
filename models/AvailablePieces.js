const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

let AvailablePiecesSchema = new Schema(
  {
    customer: {
      type: String,
    },
    supplier: {
      type: String,
    },
    linenumber: {
      type: String,
    },
    stylenumber: {
      type: String,
    },
    colour: {
      type: String,
    },
    size: {
      type: String,
    },
    date: {
      type: String,
    },
    requireddate: {
      type: String,
    },
    quantity: {
      type: String,
    },
    id: {
      type: String,
    },
    published: {
      type: String,
      // default: new Date().toLocaleString(undefined, {
      //   timeZone: "Asia/Kolkata",
      // }),
      default: () => moment().format("llll"),
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: false }
);

module.exports = mongoose.model("AvailablePieces", AvailablePiecesSchema);
