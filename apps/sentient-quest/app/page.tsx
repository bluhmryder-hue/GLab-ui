import Link from "next/link"

export default function Page() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "sans-serif",
      backgroundColor: "#121212",
      color: "#f0f0f0"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>SentientQuest</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", textAlign: "center", maxWidth: "600px" }}>
        Welcome to your agentic powered game. Experience the next evolution of interactive storytelling.
      </p>
      <Link
        href="/game.html"
        style={{
          padding: "1rem 2rem",
          fontSize: "1.5rem",
          backgroundColor: "#a29bfe",
          color: "#121212",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Launch Game
      </Link>
    </main>
  )
}
