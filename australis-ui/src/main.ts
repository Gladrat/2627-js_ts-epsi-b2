// =============================

const academyName = "Astralis";
let studentCount = 24.3;
let open = true;
open = false;

studentCount = parseInt("24");

// =============================

function add(a: number, b: number): string {
  return (a + b).toString();
}

function greet(name: string): string {
  return "Bienvenue " + name;
}

function greetStudent(name: string, nickname?: string): string {
  if (nickname) {
    return `Bienvenue ${name} (${nickname})`;
  }
  return `Bienvenue ${name}`;
}

console.log(greetStudent("Geoffroy"));
console.log(greetStudent("Geoffroy", "jaimepasjs"));

function calculatePrice(unitPrice: number, quantity: number = 1): number {
  return unitPrice * quantity;
}

calculatePrice(99);

function courseLabel(title: string, duration: number): string {
  return `${title} - ${duration.toString()} min`;
}

let c;

c = courseLabel("Runes ancienne", 90);
console.log(c);

c = courseLabel("Alchimie élémentaire", 120);
console.log(c);

function createCourseSummary(
  title: string,
  duration: number,
  room?: string,
  compact?: boolean,
): string | boolean {
  if (typeof duration != "number") {
    console.error("ATTENTION LE TYPE DE DURATION DOIT ETRE Number");
    return false;
  }

  if (compact) {
    return `${title} · ${duration}m`;
  }

  let summary = `${title} - ${duration} min`;

  if (room) {
    summary += " - " + room;
  }

  return summary;
}

c = createCourseSummary("Runes anciennes", 90);
console.log(c);
c = createCourseSummary("Alchimie élémentaire", 120, "Laboratoire");
console.log(c);
c = createCourseSummary("Runes anciennes", "90", "", true);
console.log(c);
