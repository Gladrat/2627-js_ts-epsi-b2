import type { Course } from "../models/course";

export function renderCourse(
  course: Course,
  onSelect: (courseId: number) => void,
): HTMLElement {
  const article = document.createElement("article");

  const title = document.createElement("h3");
  title.textContent = course.title;

  const duration = document.createElement("p");
  duration.textContent = course.duration + " min";

  const button = document.createElement("button");
  button.textContent = "Voir le cours";

  button.addEventListener("click", () => {
    onSelect(course.id);
  });

  article.append(title, duration, button);

  return article;
}
