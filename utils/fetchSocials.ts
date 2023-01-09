import { Skill } from "../types";

export const fetchSocials = () => {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
    .then((res) => res.json())
    .then((data) => data?.socials);
};
