const mongoose = require("mongoose");
const bycrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bycrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.comparepass = async function (password) {
  return await bycrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
