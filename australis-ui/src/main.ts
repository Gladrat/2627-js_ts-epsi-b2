import { courses } from "./data/coursesData";

import type { Course } from "./models/course";
import type { Student } from "./models/student";

import { renderCourse } from "./ui/course";

let students: Student[] = [{ id: 1, name: "Geoffroy", level: 3 }]; // Etat (state)
let courseFilter = ""; // state du filtre des cours

const app = document.querySelector("#app");
const h1 = document.querySelector("h1");

const form = document.querySelector("#student-form");
const nameInput: HTMLInputElement | null =
  document.querySelector("#student-name");
const studentsList = document.querySelector("#students"); // Représentation (élément HTML)
const filterInput = document.querySelector<HTMLInputElement>("#course-filter");

if (!app) {
  throw new Error("#app est introuvable");
}

if (!h1) {
  throw new Error("h1 est introuvable");
}

if (!form) {
  throw new Error("#student-form est introuvable");
}

if (!nameInput) {
  throw new Error("nameInput est introuvable");
}

if (!filterInput) {
  throw new Error("filterInput est introuvable");
}

const titleDirection = document.createElement("h2");
titleDirection.textContent = "Directrice: Maÿlis Dubois";
h1.after(titleDirection);

// COURSES



filterInput.addEventListener("input", () => {
  courseFilter = filterInput.value;

  console.log("Mise à jour du filtre:", courseFilter);

  renderCourses();
});

//State dérivé
function getVisibleCourses(): Course[] {
  return courses.filter((course) =>
    course.title.toLocaleLowerCase().includes(courseFilter.toLocaleLowerCase()),
  );
}

function renderCourses(): void {
  if (!app) {
    throw new Error("#app est introuvable");
  }

  app.innerHTML = "";

  for (const course of getVisibleCourses()) {
    app.append(renderCourse(course));
  }
}

// let i = 0;

// setInterval(() => {
//   i++;
//   console.log("RENDU, n°", i, "DE LA LISTE DES COURS");

//   renderCourses();
// }, 5000);

// // STUDENTS

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(nameInput.value);

  const student: Student = {
    id: Date.now(),
    name: nameInput.value,
    level: 1,
  };

  students = [...students, student];
  console.log(students);

  renderStudents();

  nameInput.value = "";
  nameInput.focus();
});

function renderStudents(): void {
  if (!studentsList) {
    throw new Error("studentsList est introuvable");
  }

  studentsList.innerHTML = "";

  for (const student of students) {
    const p = document.createElement("p");

    p.textContent = `(${student.id}) ${student.name} - Niveau: ${student.level}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";

    deleteButton.addEventListener("click", () => {
      students = students.filter(
        (currentStudent) => currentStudent.id !== student.id,
      );

      renderStudents();
    });

    p.append(deleteButton);

    studentsList.append(p);
  }
}

renderCourses();
renderStudents();
