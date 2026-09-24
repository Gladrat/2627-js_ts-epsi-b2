import type { Course } from "../models/course";

export const courses: Course[] = [
  {
    id: 1,
    title: "Runes anciennes",
    duration: 90,
    available: true,
  },
  {
    id: 2,
    title: "alchimie élEmentairE",
    duration: 120,
    available: false,
  },
  {
    id: 3,
    title: "Illusions appliquées",
    duration: 75,
    available: true,
  },
  {
    id: 4,
    title: "Enchantements défensifs",
    duration: 105,
    available: true,
  },
];