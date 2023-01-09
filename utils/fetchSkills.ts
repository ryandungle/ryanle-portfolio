import { Skill } from "../types";

export const fetchSkills = () => {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
    .then((res) => res.json())
    .then((data) => data?.skills);
};
