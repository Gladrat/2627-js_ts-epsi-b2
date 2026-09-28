import type { Course } from "../models/course";

export function renderCourse(course: Course): HTMLElement {
  const courseMessage = document.querySelector("#course-message");

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

  courseMessage.textContent = `${course.title} - ${course.available ? "Accès ouvert" : "Cours indisponible"}`;
  button.addEventListener("click", (event) => {});

  article.append(title, duration, button);

  return article;
}
