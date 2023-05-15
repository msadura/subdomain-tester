// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getValidSubdomain } from "@/lib/getValidSubdomain";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  spaceFromSubdomain: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const host = req.headers.host;
  const spaceSubdomain = getValidSubdomain(host);
  res.status(200).json({
    name: "CharmVerse subdomainoooooor",
    spaceFromSubdomain: spaceSubdomain || "None",
  });
}
