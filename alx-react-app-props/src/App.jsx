import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = { 
name: "Malcolm Odhiambo",
    age: 28,
    bio: "Passionate about technology, always eager to learn new skills, and enjoys solving challenging problems.",
 };
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;

