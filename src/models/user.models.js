import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      immutable: true,
      validators: {
        match: [
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          "Please add a valid email string to the email path.",
        ],
      },
    },
    password: {
      type: String,
      required: true,
    },
    confirm_password: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
    fullName: String,
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  this.fullName = this.firstName + " " + this.lastName;
  next();
});

export default model("User", UserSchema);
