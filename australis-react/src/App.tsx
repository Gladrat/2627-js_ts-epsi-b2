type Course = {
  readonly id: number,
  title: string,
  duration: number,
  available: boolean
}

const course: Course = {
  id: 1,
  title: "Runes anciennes",
  duration: 90,
  available: true
}

// Fragments
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

function CourseCard() {
  // renderCount++;

  return (
    <article>
      <h2>{course.title}</h2>
      <p>{course.duration} min</p>
      {/* <p>Rendu n°{renderCount}</p> */}
    </article>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Académie Astralis</h1>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </main>
    </>
  );
}

export default App;
