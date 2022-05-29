// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import hotel from "@data/hotel";

export default function handler(req, res) {
  res.status(200).json(hotel);
}
