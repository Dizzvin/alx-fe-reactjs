import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const profiles = [
    {
      name: "Malcolm Odhiambo",
      age: 28,
      bio: "Passionate about technology, always eager to learn new skills, and enjoys solving challenging problems."
    },
    {
      name: "Alice",
      age: 25,
      bio: "Loves hiking and photography."
    },
    {
      name: "James",
      age: 30,
      bio: "Avid traveler and foodie."
    }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <MainContent profiles={profiles} />
      <Footer />
    </div>
  );
}

export default App;

