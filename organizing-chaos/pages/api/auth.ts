import type { NextApiRequest, NextApiResponse } from "next";
import UserModel from "../../models/user.model";
import { connectMongo } from "../../utils/dbConnect";

// still need to figure out how to connect the db
// need to hash the password

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, password } = req.body;

  await connectMongo();

  if (req.method === "Post") {
    const newUser = new UserModel({
      name: name,
      email: email,
      password: password,
    });

    const user = await newUser.save((err: string) => {
      console.error(err);
    });
    res.send(user);
  }
}
