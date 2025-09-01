import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <MainContent />

       {/* ✅ User Profiles */}
      <UserProfile
        name="Malcolm Odhiambo"
        age={28}
        bio="Passionate about technology, always eager to learn new skills, and enjoys solving challenging problems"
      />

      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      />

      <UserProfile
        name="David"
        age={30}
        bio="Enjoys coding, traveling, and trying out new cuisines"
      />

      {/* ✅ Add Counter here */}
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>Counter Section</h2>
      <Counter />   
      
      <Footer />
    </div>
  );
}

export default App;

