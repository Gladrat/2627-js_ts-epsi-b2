type Course = {
  readonly id: number;
  title: string;
  duration: number;
  available: boolean;
};

type CourseCardProps = {
  course: Course;
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

function CourseCard({ course }: CourseCardProps) {
  return (
    <article>
      <h2>{course.title}</h2>
      <p>{course.duration} min</p>
      <p>{course.available ? "Disponible" : "Indisponible"}</p>
    </article>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Académie Astralis</h1>
        <CourseCard
          course={{
            id: 1,
            title: "Runes",
            duration: 90,
            available: true,
          }}
        />
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
