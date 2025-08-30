import UserProfile from "./UserProfile";

function MainContent() {
  return (
    <main
      style={{
          padding: "20px",
          backgroundColor: "#f0f8ff",
          minHeight: "200px",
          textAlign: "center",
         }}
       >
        <h2 style={{ color: "darkslategray" }}>Welcome to My Favorite Cities</h2>
        <p style={{ fontSize: "16px", marginTop: "10px" }}>
          Explore user profiles and learn more about their favorite places.
      </p>
    </main>
  );
}

export default MainContent;

