export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0f172a',
        color: '#e2e8f0',
        textAlign: 'center',
        padding: '12px 16px',
        marginTop: 'auto',
      }}
    >
      <small>&copy; {new Date().getFullYear()} My Favorite Cities</small>
    </footer>
  );
}

