import { type Student } from "./models/student";
import type { Enrollment } from "./models/enrollement";

const student: Student = {
  id: 1,
  name: "Mira",
  level: 2,
};

function displayStudent(student: Student): void {
  console.log(student.name, student.level);
}

displayStudent(student);

let selectedCourseId: number | null = null;

// Crééz un cours
// Associez l'étudiant au cours - status pending
