// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import umkm from "@data/umkm";

export default function handler(req, res) {
  res.status(200).json(umkm);
}
