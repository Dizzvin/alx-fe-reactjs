export default function UserProfile({ name, age, bio }) {
  return (
    <div
      style={{
        border: "2px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "15px auto",
        maxWidth: "320px",
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}
    >
      <h2 style={{ color: "#2563eb", marginBottom: "10px" }}>{name}</h2>
      <p style={{ margin: "5px 0", fontSize: "14px", color: "#475569" }}>
        <strong>Age:</strong> {age}
      </p>
      <p style={{ marginTop: "8px", fontSize: "14px", fontStyle: "italic", color: "#334155" }}>
        {bio}
      </p>
    </div>
  );
}

