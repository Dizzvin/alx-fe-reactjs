import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import React from "react";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <Header />

      <WelcomeMessage 
        title="Hello everyone, I am learning React at ALX!" 
        subtitle="I am learning about JSX!" 
      />

      <MainContent />

       {/* Add UserProfile components here */}
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
      
      <Footer />
    </div>
  );
}

export default App;
