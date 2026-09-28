import { type Student } from "../src/models/student";
import type { Enrollment } from "../src/models/enrollement";
import type { Course } from "../src/models/course";

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

const course: Course = {
  id: 1,
  title: "Alchimie élémentaire",
  duration: 90,
  available: true,
};

const enrollment: Enrollment = {
  id: 99,
  course, //     → course: course,
  student, //    → student: student,
  status: "pending",
};
