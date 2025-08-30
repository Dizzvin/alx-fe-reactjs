import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

function App() {
  // ✅ Profiles as data (can come from API later)
  const profiles = [
    {
      name: "Malcolm Odhiambo",
      age: 28,
      bio: "Passionate about technology, always eager to learn new skills, and enjoys solving challenging problems"
    },
    {
      name: "Alice",
      age: 25,
      bio: "Loves hiking and photography"
    },
    {
      name: "David",
      age: 30,
      bio: "Enjoys coding, traveling, and trying out new cuisines"
    }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      {/* ✅ Pass profiles into MainContent */}
      <MainContent profiles={profiles} />

      {/* ✅ Counter Section */}
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>Counter Section</h2>
      <Counter />

      <Footer />
    </div>
  );
}

export default App;

