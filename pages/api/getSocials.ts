// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Social } from "../../types";

type Data = {
  socials: Social[];
};

const query = groq`
*[_type == "social"]
`;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  sanityClient
    .fetch(query)
    .then((socials) => res.status(200).json({ socials }));
}
