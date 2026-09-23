import type { Course } from "./course";
import type { Student } from "./student.js";

type EnrollmentStatus = "pending" | "confirmed" | "cancelled";

export type Enrollment = {
  readonly id: number;
  student: Student; // name, level ...
  course: Course; // title, duration ...
  status: EnrollmentStatus;
};
