import type { Course } from "../models/course";
import coursesUrl from "./courses.json?url&no-inline";

// export type Person = {
//   name: string;
//   height: string;
//   mass: string;
//   hair_color: string;
//   skin_color: string;
//   eye_color: string;
//   birth_year: string;
//   gender: string;
//   homeworld: string;
//   films: string[];
//   species: string[];
//   vehicles: string[];
//   starships: string[];
//   created: string;
//   edited: string;
//   url: string;
// };

export async function loadCourses(): Promise<Course[]> {
  const response = await fetch(coursesUrl);
  let courses = await response.json();

  // const reponse = await fetch("https://swapi.dev/api/people/1");

  // if (!reponse.ok) {
  //   throw new Error("LE SITE EST MAL DEV");
  // }

  // const data: Person = await reponse.json();
  // console.log(data.vehicles);

  // for (const v of data.vehicles) {
  //   const response = await fetch(v);
  //   const vehicle = await response.json();
  //   console.log(vehicle);
  // }

  return courses;
}

// Quand une fonction ne retourne rien → on peut l'appeler en synchrone
// Quand une fonction retourne quelque chose → on doit l'appeler en asynchone