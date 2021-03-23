const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let FabricInspectionBoardSchema = new Schema(
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
  },
  { strict: false }
);

module.exports = mongoose.model(
  "FabricInspectionBoard",
  FabricInspectionBoardSchema
);
