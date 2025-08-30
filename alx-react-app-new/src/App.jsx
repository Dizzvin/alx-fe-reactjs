import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <MainContent />
      <Counter />   
      <Footer />
    </div>
  );
}

export default App;

