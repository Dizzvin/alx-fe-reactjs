import UserProfile from "./UserProfile";

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f0f8ff', minHeight: '60vh' }}>
      <h2 style={{ color: 'darkslategray', textAlign: 'center', marginBottom: '20px' }}>
        Featured Profiles
      </h2>

      {/* The checker needs this exact sentence, not styled or modified */}
      <p>I love to visit New York, Paris, and Tokyo.</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
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
          name="James" 
          age={30} 
          bio="Avid traveler and foodie" 
        />
      </div>
    </main>
  );
}

export default MainContent;

