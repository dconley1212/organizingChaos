import { model, models, Schema } from "mongoose";

interface USER {
  name: string;
  email: string;
  password: string;
}

const user = new Schema({
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
});

const UserModel = models.User || model("user", user);

export default UserModel;
