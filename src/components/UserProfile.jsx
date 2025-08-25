const UserProfile = ({ name, age, bio }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', marginBottom: '5px' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p style={{ fontStyle: 'italic', color: 'darkslategray' }}>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;

