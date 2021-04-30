import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData, sampleProductData } from "../../../utils/sample-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      method,
      query: { username },
    } = _req;

    console.log(username);

    if (method !== "GET") return res.status(405).send("Method not allowed");

    if (!Array.isArray(sampleProductData)) {
      throw new Error("Cannot find user data");
    }

    const products = sampleProductData.filter(
      (product) => username === product.user.toLowerCase()
    );

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
