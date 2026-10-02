type Course = {
  readonly id: number;
  title: string;
  duration: number;
  available: boolean;
  description?: string;
};

type CourseCardProps = {
  course: Course;
  onSelect: (courseId: number) => void;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Runes anciennes",
    duration: 90,
    available: true,
  },
  {
    id: 2,
    title: "Alchimie élémentaire",
    duration: 120,
    available: true,
  },
  {
    id: 3,
    title: "Invocation d'esprit",
    duration: 180,
    available: false,
  },
];

function Header() {
  return (
    <header>
      <h1>Académie Astralis</h1>
      <h2>Directrice : Miyles Dubois</h2>
      <p>
        <strong>Catalogue des cours :</strong>
      </p>
    </header>
  );
}

function CourseCard({ course, onSelect }: CourseCardProps) {
  return (
    <article>
      <h2>{course.title}</h2>
      <p>{course.duration} min</p>
      {course.available ? <p>Disponible</p> : <p>Indisponible</p>}
      {course.description && <p>{course.description}</p>}
      <button type="button" onClick={() => onSelect(course.id)}>Voir le cours</button>
    </article>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Académie Astralis</h1>
        {courses.map((c) => (
          <CourseCard
            course={c}
            onSelect={(courseId) => {
              console.log("Sélection:", courseId);
            }}
          />
        ))}
      </main>
    </>
  );
}

export default App;

// function hello({ person, style }) {
//   console.log("Hello", person.name, person.lastname);
// }

// hello({
//   name: "Geoffroy",
//   lastname: "Ladrat",
// });
