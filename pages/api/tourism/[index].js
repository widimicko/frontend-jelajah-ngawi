// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import tourism from "@data/tourism";

export default function handler(req, res) {
  // index of array
  const { index } = req.query;
  res.status(200).json(tourism[index]);
}
