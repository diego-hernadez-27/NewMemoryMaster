const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
    username: {ref: "User", type: String },
    level: {type: Integer},
    userscore: {type: Integer},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Score", scoreSchema);
