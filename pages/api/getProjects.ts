// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Project } from "../../types";

type Data = {
  projects: Project[];
};

const query = groq`
*[_type == "project"]{
  ...,
  technologies[]->
}
`;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  sanityClient
    .fetch(query)
    .then((projects) => res.status(200).json({ projects }));
}
