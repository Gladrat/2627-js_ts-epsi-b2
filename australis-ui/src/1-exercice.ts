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

  let summary = "";

  if (room) {
    summary += " - " + room;
  }

  if (compact) {
    return `${title} · ${duration}m` + room;
  }

  summary = `${title} - ${duration} min` + summary;

  return summary;
}

c = createCourseSummary("Runes anciennes", 90);
console.log(c);
c = createCourseSummary("Alchimie élémentaire", 120, "Laboratoire");
console.log(c);
// c = createCourseSummary("Runes anciennes", "90", "", true);
// console.log(c);
