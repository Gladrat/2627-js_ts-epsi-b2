const courseTitle = [
  "Alchimie élémentaire",
  "Runes anciennes",
  "Illusions appliquées",
];

// const courseTitle: string[] → c'est une liste de strings

courseTitle.push("Etude des esprits");

// ===========================================

function double(value: number): number {
  console.log(value * 2);
  return value * 2;
}

double(12);

const double_ = function (value: number): number {
  console.log(value * 2);
  return value * 2;
};

const double__ = (value: number): number => {
  return value * 2;
};

const double___ = (value: number): number => value * 2;

double_(12);

setTimeout(() => {
  console.log("Hello !");
}, 5000);

setTimeout(() => {
  console.log("Bonjour après 5 secondes !");
}, 5000);