const courseTitle = [
  "Alchimie élémentaire",
  "Runes anciennes",
  "Illusions appliquées",
];

// const courseTitle: string[] → c'est une liste de strings

courseTitle.push("Etude des esprits");

// ===========================================

function double(value: number): number {
  return value * 2;
}

// const double_ = function (value: number): number {
//   return value * 2;
// };

// const double__ = (value: number): number => {
//   return value * 2;
// };

const double___ = (value: number): number => value * 2;

// setTimeout(() => {
//   console.log("Hello !");
// }, 5000);

// setTimeout(() => {
//   console.log("Bonjour après 5 secondes !");
// }, 5000);

const courses = [
  {
    id: 1,
    title: "Runes anciennes",
    duration: 90,
  },
  {
    id: 2,
    title: "Alchimie élémentaire",
    duration: 120,
  },
  {
    id: 3,
    title: "Illusions appliquées",
    duration: 75,
  },
];

// Ok c'est pareil que en dessous mais on écrira pas ça

// const titles: string[] = courses.map((course) => {
//   return course.title.toUpperCase();
// });

const titles: string[] = courses.map((course) => course.title.toUpperCase());
const ids: string[] = courses.map((course) => course.id.toString());
// Extraire un tableau avec les id convertis en string
// .toString()

console.log(titles);
console.log(ids);

const longCourses = courses.filter((course) => course.duration >= 90);

console.log(longCourses);

// map    → transforme chaque élément (string, number, objets, etc.) du tableau
// filter → conserve certains éléments
// find   → trouve certains éléments

const specificCourse = courses.find((course) => course.id === 2);

console.log(specificCourse);

const longCourseTitle = courses
  .filter((course) => course.duration >= 90)
  .map((course) => course.title.toUpperCase());

// Créé un nouveau tableau
// Qui stocke certains éléments
// Puis applique une transformation sur ces éléments

// TODO : Reduce

console.log(longCourseTitle);

// ========== DESTRUCTURING ==========

const student = {
  id: 1,
  name: "Mira",
  level: 2,
};

// Extrayez le nom et le niveau dans deux variables

// const name = student.name;
// const level = student.level;

const { name, level } = student;

function displayStudent({
  name,
  level,
}: {
  name: string;
  level: number;
}): void {
  console.log(name, level);
}

displayStudent(student);

// --- VS ---

// function displayStudent2(name: string, level: number): void {
//   console.log(name, level);
// }

// displayStudent2(student.name, student.level);

// TODO : ...
