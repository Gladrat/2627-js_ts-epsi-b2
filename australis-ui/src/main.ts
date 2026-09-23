const courses = [
  {
    id: 1,
    title: "Runes anciennes",
    duration: 90,
    available: true,
  },
  {
    id: 2,
    title: "alchimie élEmentairE",
    duration: 120,
    available: false,
  },
  {
    id: 3,
    title: "Illusions appliquées",
    duration: 75,
    available: true,
  },
  {
    id: 4,
    title: "Enchantements défensifs",
    duration: 105,
    available: true,
  },
];

function courseLabelById(id: number): string {
  const course = courses.find((course) => course.id === id);

  if (!course) {
    return "Cours introuvable";
  }

  return course.title + " - " + course.duration + " min";
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

function getCourseTitlesFrom(minDuration: number): string[] {
  return courses
    .filter((c) => c.duration >= minDuration)
    .map((c) => capitalize(c.title.toLowerCase()));
}

let c;

c = courseLabelById(2);
console.log(c);

c = courseLabelById(99);
console.log(c);

c = getCourseTitlesFrom(100);
console.log(c);
