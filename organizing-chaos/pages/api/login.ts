import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../utils/dbConnect";
import UserModel from "../../models/user.model";
import bcrypt from "bcrypt";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo();

    const { email, password } = req.body;

    if (req.method === "Post") {
      const user = UserModel.findOne({ email: email });

      if (!user) {
        res.status(401).json({ error: "invalid login" });
        return;
      }

      const isUser = bcrypt.compareSync(password, user.password);

      if (!isUser) {
        res.status(401).json({ error: "invalid login" });
      }
      res.status(201);
      res.end();
    }
  } catch (err) {
    console.error(err);
  }
}
