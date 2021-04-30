import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = _req;

    if (method !== "GET") return res.status(405).send("Method not allowed");

    const { db } = await connectToDatabase();
    const data = await db.collection("user").find().toArray();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
