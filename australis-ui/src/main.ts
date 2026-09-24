const app = document.querySelector("#app");
// document.querySelectorAll()

if (!app) {
  throw new Error("#app est introuvable");
}

app.textContent = "Lorem ipsum";

const titleDirection = document.createElement("h2");
titleDirection.textContent = "Directrice: Maÿlis Dubois"
app.append(titleDirection);

// Chercher sur le Web comment insérer notre h2 juste après le h1