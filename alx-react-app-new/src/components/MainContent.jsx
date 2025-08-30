import UserProfile from "./UserProfile.jsx";

export default function MainContent({ profiles }) {
  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: "#f0f8ff",
        minHeight: "60vh"
      }}
    >
      <h2
        style={{
          color: "darkslategray",
          textAlign: "center",
          marginBottom: "20px"
        }}
      >
        Featured Profiles
      </h2>

      <p style={{ textAlign: "center" }}>
        "I love to visit New York, Paris, and Tokyo."
      </p>

      {profiles.map((profile, index) => (
        <UserProfile
          key={index}
          name={profile.name}
          age={profile.age}
          bio={profile.bio}
        />
      ))}
    </main>
  );
}

