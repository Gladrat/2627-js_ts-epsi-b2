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
