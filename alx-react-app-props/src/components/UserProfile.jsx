
const UserProfile = ({ name, age, bio }) => {
  return (
    <div>
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        backgroundColor: "#fafafa"
      }}
     >
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
