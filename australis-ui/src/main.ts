import { courses } from "./data/coursesData";

const app = document.querySelector("#app");
const h1 = document.querySelector("h1");
// document.querySelectorAll()

if (!app) {
  throw new Error("#app est introuvable");
}

if (!h1) {
  throw new Error("h1 est introuvable");
}

app.textContent = "Lorem ipsum";

const titleDirection = document.createElement("h2");
titleDirection.textContent = "Directrice: Maÿlis Dubois";
h1.after(titleDirection);
