// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Skill } from "../../types";

type Data = {
  skills: Skill[];
};

const query = groq`
*[_type == "skill"]
`;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  sanityClient
    .fetch(query)
    .then((skills) => res.status(200).json({ skills }))
    .catch((e) => console.log(e));
}
