// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../types";

type Data = {
  experiences: Experience[];
};

const query = groq`
*[_type == "pageInfo"][0]
`;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  sanityClient
    .fetch(query)
    .then((experiences) => res.status(200).json({ experiences }));
}
