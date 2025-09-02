function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <p>© {new Date().getFullYear(2025)} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
