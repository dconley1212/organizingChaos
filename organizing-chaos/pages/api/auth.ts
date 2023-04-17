import type { NextApiRequest, NextApiResponse } from "next";

export default function register(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, password } = req.body;
}
