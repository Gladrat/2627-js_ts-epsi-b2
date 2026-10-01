import type { Student } from "../models/student";

export function renderStudent(
  student: Student,
  onDelete: (studentId: number) => void,
): HTMLElement {
  const p = document.createElement("p");
  p.textContent = `(${student.id}) ${student.name} - Niveau: ${student.level}`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Supprimer";

  deleteButton.addEventListener("click", () => {
    onDelete(student.id);
  });

  p.append(deleteButton);

  return p;
}
