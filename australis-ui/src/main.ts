import { loadCourses } from "./data/coursesData";

import type { Course } from "./models/course";
import type { Student } from "./models/student";

import { renderCourse } from "./ui/course";

// ============== DATAS ==============

let courses = await loadCourses();

// ============== ETATS (STATE) ==============

let students: Student[] = [{ id: 1, name: "Geoffroy", level: 3 }];
let courseFilter = "";
let selectedCourseId: number | null = null;

const app = document.querySelector("#app");
const h1 = document.querySelector("h1");

// ============== DOM ==============

const form = document.querySelector("#student-form");
const nameInput: HTMLInputElement | null =
  document.querySelector("#student-name");
const studentsList = document.querySelector("#students");
const filterInput = document.querySelector<HTMLInputElement>("#course-filter");
const courseDetails = document.querySelector("#course-details");

if (!courseDetails) {
  throw new Error("Zone de détail introuvable");
}

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

// ============== COURSES ==============

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

function getSelectedCourse(): Course | undefined {
  return courses.find((course) => course.id === selectedCourseId);
}

const renderCourseDetails = (): void => {
  courseDetails.innerHTML = "";

  const course = getSelectedCourse();

  if (!course) {
    return;
  }

  const title = document.createElement("h2");

  title.textContent = course.title;

  const duration = document.createElement("p");

  duration.textContent = course.duration + " min";

  courseDetails.append(title, duration);
};

function renderCourses(): void {
  if (!app) {
    throw new Error("#app est introuvable");
  }

  app.innerHTML = "";

  for (const course of getVisibleCourses()) {
    app.append(
      renderCourse(course, () => {
        selectedCourseId = course.id;
        renderCourseDetails();
      }),
    );
  }
}

// ============== STUDENTS ==============

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

// ============== RENDER (main) ==============

renderCourses();
renderStudents();
