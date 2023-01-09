// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../types";

type Data = {
  pageInfo: PageInfo;
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
    .then((pageInfo) => res.status(200).json({ pageInfo }));
}
