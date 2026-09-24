import { courses } from "./data/coursesData";
import type { Course } from "./models/course";

const app = document.querySelector("#app");
const h1 = document.querySelector("h1");
// document.querySelectorAll()

if (!app) {
  throw new Error("#app est introuvable");
}

if (!h1) {
  throw new Error("h1 est introuvable");
}

const titleDirection = document.createElement("h2");
titleDirection.textContent = "Directrice: Maÿlis Dubois";
h1.after(titleDirection);

function renderCourse(course: Course): HTMLElement {
  const article = document.createElement("article");

  const title = document.createElement("h3");
  title.textContent = course.title;

  const duration = document.createElement("p");
  duration.textContent = course.duration + " min";

  const button = document.createElement("button");
  button.textContent = "Supprimer";

  button.addEventListener("click", deleteCourse);

  article.append(title, duration, button);

  return article;
}

function deleteCourse(event) {
  console.log(event.target.parentElement.remove())
}

for (const course of courses) {
  app.append(renderCourse(course));
}