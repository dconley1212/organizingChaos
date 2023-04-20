import type { NextApiRequest, NextApiResponse } from "next";
import UserModel from "../../models/user.model";
import { connectMongo } from "../../utils/dbConnect";
import bcrypt from "bcrypt";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, email, password } = req.body;

    await connectMongo();

    if (req.method === "Post") {
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hash(password, salt);
      await UserModel.create({
        name: name,
        email: email,
        password: hash,
      });
      res.status(201);
    }
  } catch (error) {
    console.error(error);
  }
}
