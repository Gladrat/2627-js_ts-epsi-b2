import { courses } from "./data/coursesData";
import type { Course } from "./models/course";
import type { Student } from "./models/student";

let students: Student[] = [{ id: 1, name: "Geoffroy", level: 3 }]; // Etat (state)

const app = document.querySelector("#app");
const h1 = document.querySelector("h1");
const courseMessage = document.querySelector("#course-message");
const form = document.querySelector("#student-form");
const nameInput: HTMLInputElement | null =
  document.querySelector("#student-name");
const studentsList = document.querySelector("#students"); // Représentation (élément HTML)

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

const titleDirection = document.createElement("h2");
titleDirection.textContent = "Directrice: Maÿlis Dubois";
h1.after(titleDirection);

function renderCourse(course: Course): HTMLElement {
  if (!courseMessage) {
    throw new Error("#course-message est introuvable");
  }

  const article = document.createElement("article");

  const title = document.createElement("h3");
  title.textContent = course.title;

  const duration = document.createElement("p");
  duration.textContent = course.duration + " min";

  const button = document.createElement("button");
  button.textContent = "Voir le cours";

  button.addEventListener("click", (event) => {
    courseMessage.textContent = `${course.title} - ${course.available ? "Accès ouvert" : "Cours indisponible"}`;
  });

  article.append(title, duration, button);

  return article;
}

function renderCourses(): void {
  if (!app) {
    throw new Error("#app est introuvable");
  }

  app.innerHTML = "";

  for (const course of courses) {
    app.append(renderCourse(course));
  }
}

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
